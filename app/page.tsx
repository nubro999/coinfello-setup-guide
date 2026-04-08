export default function Page() {
  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="header">
        <div className="header-badge">Setup Guide</div>
        <h1>OpenClaw + CoinFello</h1>
        <p>
          AI 에이전트 기반 DeFi 자동화 세팅 가이드.
          환경설정부터 텔레그램 연동까지 단계별로 안내합니다.
        </p>
      </header>

      {/* Phase Navigation */}
      <nav className="phase-nav">
        <div className="phase-nav-item">
          <span className="phase-icon">1</span> 환경세팅
        </div>
        <div className="phase-nav-item">
          <span className="phase-icon">2</span> OpenClaw
        </div>
        <div className="phase-nav-item">
          <span className="phase-icon">3</span> CoinFello
        </div>
        <div className="phase-nav-item">
          <span className="phase-icon">4</span> Telegram
        </div>
      </nav>

      {/* ── Section 1: 환경세팅 ── */}
      <section className="section">
        <div className="section-header">
          <div className="section-icon env">1</div>
          <div>
            <div className="section-title">환경세팅</div>
            <div className="section-subtitle">API 키 발급 및 Node.js 설치</div>
          </div>
        </div>

        <div className="step">
          <span className="step-number">1</span>
          <div className="step-title">Claude API 키 발급</div>
          <div className="step-desc">
            Claude 콘솔에서 API 키를 생성하고 안전한 곳에 저장하세요.
          </div>
          <div className="code-block">
            <code>
              <a href="https://platform.claude.com/" target="_blank" rel="noopener noreferrer">
                https://platform.claude.com/
              </a>
            </code>
          </div>
        </div>

        <div className="step">
          <span className="step-number">2</span>
          <div className="step-title">Telegram Bot 생성</div>
          <div className="step-desc">
            Telegram에서 @BotFather를 검색하여 새 봇을 만들고 API 토큰을 저장하세요.
          </div>
          <div className="code-block">
            <code>{`/start
/newbot
> 봇 이름 설정 후 발급된 API 토큰 저장`}</code>
          </div>
        </div>

        <div className="step">
          <span className="step-number">3</span>
          <div className="step-title">nvm 및 Node.js 설치</div>
          <div className="step-desc">
            Node Version Manager를 설치한 후 Node.js 24 버전을 셋업합니다.
          </div>
          <div className="code-block">
            <code>{`# nvm 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

# 터미널 적용
source ~/.bashrc

# 설치 확인
nvm --version

# Node 24 설치 및 사용
nvm install 24
nvm use 24`}</code>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Section 2: OpenClaw ── */}
      <section className="section">
        <div className="section-header">
          <div className="section-icon openclaw">2</div>
          <div>
            <div className="section-title">OpenClaw</div>
            <div className="section-subtitle">AI 에이전트 프레임워크 설치 및 설정</div>
          </div>
        </div>

        <div className="step">
          <span className="step-number">1</span>
          <div className="step-title">OpenClaw 설치</div>
          <div className="code-block">
            <code>npm i -g openclaw@latest</code>
          </div>
        </div>

        <div className="step">
          <span className="step-number">2</span>
          <div className="step-title">데몬 설치 및 온보딩</div>
          <div className="step-desc">
            온보딩 과정에서 Claude API 키를 입력하세요.
          </div>
          <div className="code-block">
            <code>openclaw onboard --install-daemon</code>
          </div>
        </div>

        <div className="step">
          <span className="step-number">3</span>
          <div className="step-title">모델 및 플랫폼 설정</div>
          <div className="note">
            <span className="note-icon">i</span>
            <span>
              온보딩 과정에서 AI 모델을 선택한 후 <strong>Telegram</strong>을 플랫폼으로 선택하고,
              BotFather에서 발급받은 API 토큰을 붙여넣으세요.
            </span>
          </div>
        </div>

        <div className="step">
          <span className="step-number">4</span>
          <div className="step-title">에이전트 실행 (Hatch)</div>
          <div className="step-desc">
            TUI에서 hatch를 실행하거나, Control UI 대시보드에서 실행할 수 있습니다.
          </div>
          <div className="code-block">
            <code>{`# Control UI 대시보드 접속
http://127.0.0.1:18789/`}</code>
          </div>
          <div className="note tip">
            <span className="note-icon">*</span>
            <span>
              API 등록이 안 될 경우 아래 명령어로 에이전트를 수동 추가하세요.
            </span>
          </div>
          <div className="code-block" style={{ marginTop: '0.4rem' }}>
            <code>openclaw agents add main</code>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Section 3: CoinFello ── */}
      <section className="section">
        <div className="section-header">
          <div className="section-icon coinfello">3</div>
          <div>
            <div className="section-title">CoinFello</div>
            <div className="section-subtitle">DeFi 에이전트 스킬 설치 및 활용</div>
          </div>
        </div>

        <div className="step">
          <span className="step-number">1</span>
          <div className="step-title">CoinFello 스킬 설치</div>
          <div className="step-desc">
            OpenClaw에 자연어로 명령하여 CoinFello 스킬을 설치합니다.
          </div>
          <div className="prompt-block">
            coinfello skill을 clawhub에서 찾아서 설치해줘
          </div>
        </div>

        <div className="step">
          <span className="step-number">2</span>
          <div className="step-title">스마트 계정 생성</div>
          <div className="step-desc">
            DeFi 트랜잭션을 위한 스마트 계정을 생성합니다.
          </div>
          <div className="prompt-block">
            create_account 만들어줘
          </div>
        </div>

        <div className="step">
          <span className="step-number">3</span>
          <div className="step-title">자금 입금</div>
          <div className="step-desc">
            생성된 스마트 계정 주소로 사용할 체인에 자금을 송금합니다.
          </div>
          <div className="prompt-block">
            base network에 1 USDC 송금해줘
          </div>
          <div className="note warning">
            <span className="note-icon">!</span>
            <span>
              입금 후 OpenClaw에서 잔액이 정상적으로 반영되었는지 확인하세요.
            </span>
          </div>
        </div>

        <div className="step">
          <span className="step-number">4</span>
          <div className="step-title">토큰 스왑</div>
          <div className="step-desc">
            자연어 명령으로 토큰 간 스왑을 실행합니다.
          </div>
          <div className="prompt-block">
            USDC를 USDT로 스왑해줘
          </div>
        </div>

        <div className="step">
          <span className="step-number">5</span>
          <div className="step-title">자동 리밸런싱 설정</div>
          <div className="step-desc">
            CoinFello가 최적의 예치 풀을 탐색하고 자동으로 리밸런싱하도록 설정합니다.
          </div>
          <div className="prompt-block">
            base에서 갖고있는 USDC를 리밸런싱하고 싶은데, coinfello에서 적당한 예치풀을 찾아서 매일 오전 9시에 자동으로 리밸런싱해줘
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Section 4: Telegram 연동 ── */}
      <section className="section">
        <div className="section-header">
          <div className="section-icon telegram">4</div>
          <div>
            <div className="section-title">Telegram 연동</div>
            <div className="section-subtitle">봇 페어링 및 동작 확인</div>
          </div>
        </div>

        <div className="step">
          <span className="step-number">1</span>
          <div className="step-title">텔레그램 봇 접속</div>
          <div className="step-desc">
            BotFather에서 생성한 봇의 아이디로 텔레그램에서 접속 후 시작합니다.
          </div>
          <div className="code-block">
            <code>/start</code>
          </div>
        </div>

        <div className="step">
          <span className="step-number">2</span>
          <div className="step-title">페어링 승인</div>
          <div className="step-desc">
            OpenClaw 터미널에서 텔레그램 페어링을 승인합니다.
          </div>
          <div className="code-block">
            <code>openclaw pairing approve telegram [페어링코드]</code>
          </div>
          <div className="note">
            <span className="note-icon">i</span>
            <span>페어링 코드는 텔레그램 봇에서 /start 시 표시됩니다.</span>
          </div>
        </div>

        <div className="step">
          <span className="step-number">3</span>
          <div className="step-title">연동 테스트</div>
          <div className="step-desc">
            텔레그램에서 자연어로 명령을 보내 정상 동작을 확인합니다.
          </div>
          <div className="prompt-block">
            coinfello를 통해서 현재 DeFi 예치 현황 확인해줘
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          OpenClaw + CoinFello Setup Guide
        </p>
      </footer>
    </div>
  );
}
