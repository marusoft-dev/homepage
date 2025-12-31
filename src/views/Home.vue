<script setup lang="ts">
import { ref } from 'vue';

const sloganText = "멈춰버린 과거의 코드를 비즈니스의 미래를 위한 자산으로 재설계합니다.";
const servicesCmd = "./show-services.sh";
const processCmd = "./show-process.sh";
const techCmd = "./show-tech-stack.sh";
const partnersCmd = "./show-target-partners.sh";

const showFinalPrompt = ref(true);
</script>

<template>
  <div class="home-container">
    <!-- Slogan -->
    <div class="terminal-line">
      <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
      <span class="command">{{ sloganText }}</span>
    </div>

    <!-- Services -->
    <div class="terminal-line">
      <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
      <span class="command">{{ servicesCmd }}</span>
    </div>
    <div class="output">
      <div class="output-header">[ System Modernization ]</div>
      <p>> 스파게티 코드를 Clean Architecture 기반으로 재구조화하여 생산성을 회복합니다.</p>
      <p>> ASP, PHP, JSP 등 레거시 환경을 최신 Node.js, Go, Python, Java 에코시스템으로 안전하게 이관합니다.</p>
      <p>> 노후화된 데이터 구조 개선 및 쿼리 최적화로 시스템 성능 극대화합니다.</p>
      <div class="output-header">[ Security & Reliability ]</div>
      <p>> 보안 업데이트가 중단된 취약 환경을 진단하고 최신 보안 프로토콜 우선 적용합니다.</p>
      <p>> 비즈니스 중단을 최소화하는 점진적 마이그레이션 전략을 수립합니다.</p>
      <p>> 작업이 완료된 후에도 내부 인력이 원활하게 운영할 수 있도록 표준화된 가이드와 문서를 제공합니다.</p>
    </div>

    <!-- Process -->
    <div class="terminal-line">
      <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
      <span class="command">{{ processCmd }}</span>
    </div>
    <div class="output">
      <p>1. 진단 및 분석 ==> 2. 전략 수립 ==> 3. 실행 및 전환 ==> 4. 안정화 및 운영</p>
    </div>

    <!-- Tech Stack -->
    <div class="terminal-line">
      <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
      <span class="command">{{ techCmd }}</span>
    </div>
    <div class="output">
      <pre>
Category      | Tech & Tools
-----------------------------------------------------------------
Backend       | Java 17+/21, Node.js, TypeScript, Go, Python
Legacy        | Java 1.8 & Below, PHP, Classic ASP, JSP
Infra         | AWS, Docker, Linux, CI/CD Automation
Database      | PostgreSQL, MySQL, Redis, Oracle 19c+
      </pre>
    </div>

    <!-- Target Partners -->
    <div class="terminal-line">
      <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
      <span class="command">{{ partnersCmd }}</span>
    </div>
    <div class="output">
      <p>[✓] 유지보수 인력을 구하기 힘든 레거시 서비스를 보유한 기업</p>
      <p>[✓] Java/전자정부프레임워크 기반의 노후 시스템 고도화가 필요한 기업</p>
      <p>[✓] 신규 기능 추가 시마다 사이드 이펙트(Bug)로 고통받는 서비스 운영자</p>
      <p>[✓] 보안 취약점 때문에 시스템 전체 리뉴얼이 시급한 중소기업/스타트업</p>
    </div>

    <!-- Final Prompt -->
    <div v-if="showFinalPrompt" class="terminal-line">
        <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
        <span class="cursor">_</span>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  font-family: 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
}

.terminal-section {
  margin-top: 2rem;
}

.terminal-line {
  line-height: 1.5;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prompt-user {
  color: var(--krds-text-username); /* Black, as requested */
  font-weight: bold;
}

.prompt-symbol {
  color: var(--krds-text-primary);
  margin-right: 0.5rem;
}

.command {
  color: var(--krds-text-primary);
  white-space: pre-wrap;
}

.output {
  padding-left: 1rem;
  color: var(--krds-text-secondary);
}

.output-header {
  color: var(--krds-blue);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.output p {
  margin-bottom: 0.25rem;
}

.output pre {
  font-family: 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
  white-space: pre;
  color: var(--krds-text-secondary);
}

.cursor {
  display: inline-block;
  background-color: var(--krds-text-primary);
  margin-left: 5px;
  animation: blink 1s infinite;
  width: 8px;
  height: 1rem;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>

