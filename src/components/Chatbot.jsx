

function Chatbot() {
  return (
    <div className="chatbot-widget" id="chatbotWidget">
      <div className="chatbot-panel" id="chatbotPanel">
        <div className="chatbot-header">
          <div className="chatbot-avatar"><i className="fas fa-robot"></i></div>
          <div className="chatbot-header-info">
            <strong data-i18n="chatbotName">Ibnu's Virtual Assistant</strong>
            <span className="chatbot-status">
              <span className="chatbot-status-dot"></span>
              <span data-i18n="chatbotStatus">Online</span>
            </span>
          </div>
          <div className="chatbot-menu-wrap" id="chatbotMenuWrap">
            <button className="chatbot-menu-btn" id="chatbotMenuBtn" data-i18n-aria="chatbotMenuAria" aria-label="Menu Chat">
              <i className="fas fa-ellipsis"></i>
            </button>
            <div className="chatbot-menu-dropdown" id="chatbotMenuDropdown">
              <button className="chatbot-menu-item" id="chatbotNewChatBtn">
                <i className="fas fa-pen"></i> <span data-i18n="chatbotMenuNew">Mulai Chat Baru</span>
              </button>
              <button className="chatbot-menu-item" id="chatbotEndChatBtn">
                <i className="fas fa-xmark"></i> <span data-i18n="chatbotMenuEnd">Akhiri Chat</span>
              </button>
              <button className="chatbot-menu-item" id="chatbotHistoryBtn">
                <i className="fas fa-clock-rotate-left"></i> <span data-i18n="chatbotMenuHistory">Lihat Riwayat Chat</span>
              </button>
            </div>
          </div>
          <button className="chatbot-close" id="chatbotCloseBtn" aria-label="Close">
            <i className="fas fa-xmark"></i>
          </button>
        </div>

        <div className="chatbot-scrim" id="chatbotScrim"></div>

        <div className="chatbot-body" id="chatbotBody" data-lenis-prevent></div>

        <div className="chatbot-quick-replies" id="chatbotQuickReplies"></div>

        <div className="chatbot-input-row">
          <input
            type="text"
            className="chatbot-input"
            id="chatbotInput"
            data-i18n-placeholder="chatbotPlaceholder"
            placeholder="Tulis pesan..."
            autoComplete="off"
          />
          <button className="chatbot-send-btn" id="chatbotSendBtn" aria-label="Send">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>

      <button className="chatbot-toggle-btn" id="chatbotToggleBtn" data-i18n-aria="chatbotAria" aria-label="Buka Asisten Virtual">
        <i className="fas fa-comment-dots chatbot-icon-chat"></i>
        <i className="fas fa-xmark chatbot-icon-close"></i>
      </button>
    </div>
  );
}

export default Chatbot;
