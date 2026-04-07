export default function Page() {
  return (
    <div className="container">
      <h1>CoinFello Setup Guide</h1>
      <p className="subtitle">OpenClaw + CoinFello 세션 환경설정 가이드</p>

      {/* Section 1: 환경세팅 */}
      <section className="section">
        <h2 className="section-title">1. 환경세팅</h2>

        <div className="step">
          <p className="step-label">
            <span className="step-number">1</span>
            Claude API 키 발급받기 → 메모장에 저장
          </p>
          <code>
            <a href="https://platform.claude.com/" style={{ color: "#60a5fa" }}>
              https://platform.claude.com/
            </a>
          </code>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">2</span>
            Telegram에서 @BotFather 추가
          </p>
          <code>{`/start\n/newbot > 이름 짓기\napi 키 메모장에 저장`}</code>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">3</span>
            nvm 설치
          </p>
          <code>
            {`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash`}
          </code>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">4</span>
            터미널에 적용
          </p>
          <code>source ~/.bashrc</code>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">5</span>
            버전확인
          </p>
          <code>nvm --version</code>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">6</span>
            Node 24 버전 설치
          </p>
          <code>nvm install 24</code>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">7</span>
            버전 변경
          </p>
          <code>nvm use 24</code>
        </div>
      </section>

      <hr className="divider" />

      {/* Section 2: OpenClaw */}
      <section className="section">
        <h2 className="section-title">2. OpenClaw</h2>

        <div className="step">
          <p className="step-label">
            <span className="step-number">1</span>
            OpenClaw 설치
          </p>
          <code>npm i -g openclaw@latest</code>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">2</span>
            데몬 설치 및 온보딩
          </p>
          <code>openclaw onboard --install-daemon</code>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">3</span>
            Carbon 패키지 설치
          </p>
          <code>{`cd /home/nubroo/.nvm/versions/node/v22.18.0/lib/node_modules/openclaw\nnpm install @buape/carbon`}</code>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">4</span>
            모델 선택 / Telegram 선택
          </p>
          <div className="note">
            모델 선택 후 telegram 선택 → API 키 붙여넣기
          </div>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">5</span>
            데몬 재설치
          </p>
          <code>openclaw onboard --install-daemon</code>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">6</span>
            Install missing skill dependencies
          </p>
          <div className="note">
            🧩 clawhub, 📦 mcporter
            <br />
            Preferred node manager for skill installs: <strong>npm</strong>
            <br />
            Installed clawhub
          </div>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">7</span>
            hook 설정
          </p>
          <div className="note">bootstrap, session memory</div>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">8</span>
            TUI에서 hatch 실행
          </p>
          <div className="note">hatch in TUI</div>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">9</span>
            토큰 확인
          </p>
          <code>{`cat ~/.openclaw/openclaw.json | grep token`}</code>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">10</span>
            대시보드 접속
          </p>
          <code>http://127.0.0.1:18789/</code>
        </div>
      </section>

      <hr className="divider" />

      {/* Section 3: CoinFello */}
      <section className="section">
        <h2 className="section-title">3. CoinFello</h2>

        <div className="step">
          <p className="step-label">
            <span className="step-number">1</span>
            skills에서 Clawhub → coinfello 검색
          </p>
          <div className="note">연결확인 후 진행</div>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">2</span>
            계정 생성 (스마트 계정 주소 발급)
          </p>
          <code>npx @coinfello/agent-cli@latest create_account --use-unsafe-private-key</code>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">3</span>
            로그인 (SIWE 인증)
          </p>
          <code>npx @coinfello/agent-cli@latest sign_in</code>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">4</span>
            계정 주소 확인
          </p>
          <code>npx @coinfello/agent-cli@latest get_account</code>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">5</span>
            위 주소로 사용할 체인에 USDT/USDC 등 입금
          </p>
          <div className="note">
            Polygon, Base, Optimism 등 EVM 지원 체인만!
          </div>
        </div>

        <div className="step">
          <p className="step-label">
            <span className="step-number">6</span>
            자연어로 명령
          </p>
          <code>{`npx @coinfello/agent-cli@latest send_prompt "swap 10 USDC to ETH on Base"`}</code>
        </div>
      </section>
    </div>
  );
}
