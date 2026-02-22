/* RESO DB — web-llm Chat (Step 4) */

(function () {
  'use strict';

  var MODEL_ID = 'Llama-3.2-1B-Instruct-q4f16_1-MLC';
  var engine = null;
  var marked = null;
  var isLoading = false;
  var isGenerating = false;

  function init() {
    var loadBtn = document.getElementById('load-model-btn');
    if (!loadBtn) return;

    // Check WebGPU support
    if (!navigator.gpu) {
      var loader = document.querySelector('.model-loader');
      if (loader) {
        loader.innerHTML =
          '<div style="padding: 1.5rem; background: rgba(239,68,68,0.1); border-radius: 8px; border: 1px solid rgba(239,68,68,0.2);">' +
          '<p style="color: #ef4444; font-weight: 600; margin-bottom: 0.5rem;">WebGPU Not Available</p>' +
          '<p style="color: #94a3b8; font-size: 0.875rem; margin: 0;">Your browser does not support WebGPU, which is required for in-browser AI. ' +
          'Try Chrome 113+ or Edge 113+. The pre-written AI summary above is still available.</p>' +
          '</div>';
      }
      return;
    }

    loadBtn.addEventListener('click', loadModel);

    // Chat send
    var sendBtn = document.getElementById('chat-send');
    var chatInput = document.getElementById('chat-input');
    if (sendBtn) sendBtn.addEventListener('click', sendMessage);
    if (chatInput) {
      chatInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          sendMessage();
        }
      });
    }
  }

  async function loadModel() {
    if (isLoading || engine) return;
    isLoading = true;

    var loadBtn = document.getElementById('load-model-btn');
    var progressTrack = document.querySelector('.progress-bar-track');
    var progressFill = document.querySelector('.progress-bar-fill');
    var progressText = document.querySelector('.progress-text');

    if (loadBtn) loadBtn.style.display = 'none';
    if (progressTrack) progressTrack.style.display = 'block';

    try {
      var [{ CreateMLCEngine }, markedMod] = await Promise.all([
        import('https://esm.run/@mlc-ai/web-llm'),
        import('https://esm.run/marked')
      ]);
      marked = markedMod.marked;

      engine = await CreateMLCEngine(MODEL_ID, {
        initProgressCallback: function (report) {
          if (progressFill && report.progress !== undefined) {
            var pct = Math.round(report.progress * 100);
            progressFill.style.width = pct + '%';
          }
          if (progressText && report.text) {
            progressText.textContent = report.text;
          }
        }
      });

      // Show chat interface
      var loader = document.querySelector('.model-loader');
      var chatUI = document.querySelector('.chat-ui');
      if (loader) loader.style.display = 'none';
      if (chatUI) chatUI.style.display = 'block';

    } catch (err) {
      console.error('Failed to load model:', err);
      if (progressText) {
        progressText.textContent = 'Failed to load model. ' + (err.message || '');
        progressText.style.color = '#ef4444';
      }
    }

    isLoading = false;
  }

  async function sendMessage() {
    if (!engine || isGenerating) return;

    var input = document.getElementById('chat-input');
    var messages = document.querySelector('.chat-messages');
    if (!input || !messages) return;

    var text = input.value.trim();
    if (!text) return;
    input.value = '';

    // Add user message
    appendMessage(messages, 'user', text);

    // Add placeholder for assistant
    var assistantEl = appendMessage(messages, 'assistant', '');
    isGenerating = true;

    try {
      // Build context with query results
      var context = [
        'You are a real estate data analyst assistant.',
        '',
        'The user queried RESO-standard MLS data and got these results:',
        'Query: ZIP codes near Austin, TX (30.3181, -97.748) where closed listings sold above list price in the last 6 months.',
        '',
        'Results by ZIP code (% above list price | number of closings):',
        '- 78750: 9.52% above list | 21 closings',
        '- 78757: 8.36% above list | 347 closings',
        '- 78704: 8.33% above list | 276 closings',
        '- 78702: 8.27% above list | 423 closings',
        '- 78759: 8.27% above list | 133 closings',
        '- Most other ZIPs: 5-8% above list',
        '- 78730: 0% above list (outlier)',
        '',
        'Instructions:',
        '- Answer the user\'s question based ONLY on the data above.',
        '- Be concise and specific. Reference actual ZIP codes and numbers.',
        '- If the user asks about market conditions, use the above-list-price percentages as evidence.'
      ].join('\n');

      var chunks = await engine.chat.completions.create({
        messages: [
          { role: 'system', content: context },
          { role: 'user', content: text }
        ],
        stream: true,
        max_tokens: 256
      });

      var response = '';
      for await (var chunk of chunks) {
        var delta = chunk.choices[0]?.delta?.content || '';
        response += delta;
        assistantEl.innerHTML = marked.parse(response);
        messages.scrollTop = messages.scrollHeight;
      }

      if (!response) assistantEl.textContent = 'I couldn\'t generate a response. Try asking again.';

    } catch (err) {
      console.error('Chat error:', err);
      assistantEl.textContent = 'Error generating response. Please try again.';
    }

    isGenerating = false;
  }

  function appendMessage(container, role, text) {
    var div = document.createElement('div');
    div.className = 'chat-message ' + role;
    div.textContent = text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
