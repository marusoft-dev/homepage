<script setup lang="ts">
import { ref } from 'vue';

// --- State Management ---
const selectedCase = ref<any>(null);

// --- Data ---
const caseStudies = ref([
  {
    id: 'A',
    title: 'A사: 대규모 레거시 시스템 현대화',
    summary: 'PHP 기반 모놀리식 시스템을 Node.js MSA로 전환하여 개발 속도 향상 및 비용 절감',
    challenge: '10년 이상 운영된 PHP 기반의 모놀리식(Monolithic) 시스템으로 인해 신규 기능 개발 속도 저하, 잦은 장애, 높은 유지보수 비용 문제에 직면했습니다. 특히, 특정 버전의 PHP에 대한 보안 지원이 중단되어 심각한 비즈니스 리스크를 안고 있었습니다.',
    solution: "마루소프트는 A사의 비즈니스 중단을 최소화하는 '점진적 현대화(Strangler Fig Pattern)' 전략을 제안했습니다. 핵심 기능을 Node.js 기반의 마이크로서비스 아키텍처(MSA)로 단계적으로 전환하고, 레거시 시스템과의 연동을 위한 API Gateway를 구축했습니다.",
    result: [
      '신규 기능 개발 기간 70% 단축',
      '시스템 장애율 95% 감소',
      '클라우드 인프라 비용 30% 절감',
      '최신 기술 스택 도입으로 개발자 채용 경쟁력 확보',
    ],
    ready: true,
  },
  {
    id: 'B',
    title: 'B사: 클라우드 기반 데이터 플랫폼 구축',
    summary: '분산된 데이터를 통합하고 분석 기반을 마련하여 데이터 기반 의사결정 지원',
    challenge: '데이터가 여러 시스템에 분산되어 있어 통합적인 분석이 어려웠습니다.',
    solution: '클라우드 환경에 데이터 레이크를 구축하고, 데이터 파이프라인을 자동화했습니다.',
    result: [],
    ready: false,
  },
  {
    id: 'C',
    title: 'C사: 고성능 웹 서비스 아키텍처 설계',
    summary: '급증하는 트래픽에 대응하기 위한 확장성 있는 아키텍처 설계 및 구축',
    challenge: '이벤트 기간 동안 급증하는 트래픽으로 인해 잦은 서비스 다운이 발생했습니다.',
    solution: '부하 분산(Load Balancing) 및 메시지 큐(Message Queue)를 도입하여 안정적인 트래픽 처리가 가능한 구조로 개선했습니다.',
    result: [],
    ready: false,
  }
]);

// --- Methods ---
const selectCase = (caseStudy: any) => {
  selectedCase.value = caseStudy;
};

const goBackToList = () => {
  selectedCase.value = null;
};
</script>

<template>
  <div class="content-container">
    <!-- List View -->
    <div v-if="!selectedCase">
      <div class="terminal-line">
        <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
        <span class="command">./show-case-projects.sh</span>
      </div>
      <div class="output">
        <h1>[ 재구축 프로세스 ]</h1>
        <p>마루소프트는 복잡하게 얽힌 레거시 시스템을 유지보수가 용이하고 확장성 있는 현대적 아키텍처로 재설계합니다.</p>
        
        <!-- Static SVG Diagram -->
        <div class="diagram-area">
          <svg viewBox="0 0 900 400" width="100%" height="100%" style="font-family: 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace;">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#D1D1D1" />
              </marker>
            </defs>

            <!-- Titles -->
            <text x="110" y="25" text-anchor="middle" font-size="1rem" font-weight="bold" fill="#555">Legacy</text>
            <text x="450" y="25" text-anchor="middle" font-size="1rem" font-weight="bold" fill="#1CB6BE">Refactoring</text>
            <text x="790" y="25" text-anchor="middle" font-size="1rem" font-weight="bold" fill="#555">Modern</text>

            <!-- Lines -->
            <!-- Lines from Legacy to Diamond (no marker-end) -->
            <line x1="220" y1="90" x2="360" y2="200" stroke="#D1D1D1" stroke-width="2"></line>
            <line x1="220" y1="200" x2="360" y2="200" stroke="#D1D1D1" stroke-width="2"></line>
            <line x1="220" y1="310" x2="360" y2="200" stroke="#D1D1D1" stroke-width="2"></line>

            <!-- Lines from Diamond to Modern -->
            <line x1="540" y1="200" x2="680" y2="90" stroke="#D1D1D1" stroke-width="2" marker-end="url(#arrowhead)"></line>
            <line x1="540" y1="200" x2="680" y2="200" stroke="#D1D1D1" stroke-width="2" marker-end="url(#arrowhead)"></line>
            <line x1="540" y1="200" x2="680" y2="310" stroke="#D1D1D1" stroke-width="2" marker-end="url(#arrowhead)"></line>


            <!-- Legacy Boxes -->
            <foreignObject x="0" y="50" width="220" height="80">
              <div class="diagram-box legacy-box">Untestable <br/>Spaghetti Code</div>
            </foreignObject>
            <foreignObject x="0" y="160" width="220" height="80">
              <div class="diagram-box legacy-box">Monolithic Architecture <br/>Legacy Stack</div>
            </foreignObject>
            <foreignObject x="0" y="270" width="220" height="80">
               <div class="diagram-box legacy-box">Unoptimized Schema <br/>& Legacy SQL</div>
            </foreignObject>

            <!-- Central Diamond (using polygon for shape, foreignObject for unrotated text) -->
            <polygon points="450 110, 540 200, 450 290, 360 200" fill="#1CB6BE" stroke="#148E95" stroke-width="2px" />
            <foreignObject x="360" y="160" width="180" height="80">
              <div class="diamond-text-wrapper">
                <div class="diamond-text"><b>Architecture<br/>Refactoring</b></div>
              </div>
            </foreignObject>

            <!-- Modern Boxes -->
            <foreignObject x="680" y="50" width="220" height="80">
              <div class="diagram-box modern-box">Clean Architecture <br/>& Design Pattern</div>
            </foreignObject>
            <foreignObject x="680" y="160" width="220" height="80">
              <div class="diagram-box modern-box">Cloud-Native Stack <br/>MSA-based System</div>
            </foreignObject>
            <foreignObject x="680" y="270" width="220" height="80">
               <div class="diagram-box modern-box">Database Refactoring <br/>& Performance Tuning</div>
            </foreignObject>
          </svg>
        </div>

        <h1>[ 구축사례 목록 ]</h1>
        <div v-for="c in caseStudies" :key="c.id" class="case-list-item" @click="selectCase(c)">
          <h2>{{ c.title }}</h2>
          <p>{{ c.summary }}</p>
          <span v-if="!c.ready" class="status-badge">[ 준비중 ]</span>
        </div>
      </div>
    </div>

    <!-- Detail View (unchanged) -->
    <div v-if="selectedCase">
       <div class="terminal-line">
        <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
        <span class="command">./show-case-projects.sh --case={{ selectedCase.id }}</span>
      </div>
       <div class="output">
        <button @click="goBackToList" class="back-button">[ < 목록으로 돌아가기 ]</button>
        
        <h1>{{ selectedCase.title }}</h1>
        <div v-if="selectedCase.ready">
          <div class="section">
            <h3>[ Challenge ]</h3>
            <p>{{ selectedCase.challenge }}</p>
          </div>
          <div class="section">
            <h3>[ Solution ]</h3>
            <p>{{ selectedCase.solution }}</p>
          </div>
          <div class="section">
            <h3>[ Result ]</h3>
            <ul>
              <li v-for="item in selectedCase.result" :key="item">
                <span class="highlight">[✓]</span> {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          <p>해당 구축사례의 상세 내용은 현재 준비중입니다. 곧 업데이트될 예정입니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ... (most styles remain the same) ... */
.content-container { padding: 2rem; max-width: 1280px; margin: 0 auto; font-family: 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace; }
.terminal-line { line-height: 1.5; margin-bottom: 2rem; }
h1, h2, h3 { color: var(--krds-blue); font-weight: bold; margin-bottom: 1.5rem; }
h1 { font-size: 1.5rem; margin-top: 2.5rem; }
h2 { font-size: 1.3rem; }
h3 { font-size: 1.1rem; color: var(--krds-green); margin-top: 1.5rem; }
p { line-height: 1.7; margin-bottom: 1rem; }
ul { list-style: none; padding-left: 1rem; }
li { margin-bottom: 0.5rem; }
.section { margin-bottom: 2rem; }
.highlight { color: var(--krds-green); font-weight: bold; }
.case-list-item { border: 1px solid var(--krds-gray-light); padding: 1.5rem; margin-bottom: 1rem; border-radius: 8px; cursor: pointer; transition: background-color 0.2s, border-color 0.2s; }
.case-list-item:hover { background-color: var(--krds-surface); border-color: var(--krds-blue); }
.case-list-item p { margin-bottom: 0; }
.status-badge { display: inline-block; margin-top: 1rem; padding: 0.25rem 0.5rem; background-color: var(--krds-gray-light); color: var(--krds-text-secondary); border-radius: 4px; font-size: 0.8rem; }
.back-button { background: none; border: none; color: var(--krds-blue); cursor: pointer; font-size: 1rem; margin-bottom: 2rem; padding: 0; }
.back-button:hover { text-decoration: underline; }
.output { color: var(--krds-text-secondary); }
.prompt-user { color: var(--krds-text-username); font-weight: bold; }
.prompt-symbol { color: var(--krds-text-primary); margin-right: 0.5rem; }
.command { color: var(--krds-text-primary); }

/* --- SVG Diagram Styles --- */
.diagram-area {
  padding: 1rem 0;
  margin-top: 1rem;
  margin-bottom: 3rem;
}
.diagram-box {
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  line-height: 1.4;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 0.9rem; /* Reduced font size for boxes */
}
.legacy-box {
  background-color: #F2F2F2;
  border: 2px solid #D1D1D1;
  color: #555;
}
.modern-box {
  background-color: #E8F8F9;
  border: 2px solid #1CB6BE;
  color: #0E5B60;
}
/* Removed .diamond and .diamond-text styles from previous attempt */

/* New styles for unrotated diamond text */
.diamond-text-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.diamond-text {
  color: #fff;
  text-align: center;
  line-height: 1.4;
  font-size: 0.9rem; /* Reduced font size for diamond text */
}
</style>
