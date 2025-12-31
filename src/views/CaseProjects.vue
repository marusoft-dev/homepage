<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Buffer } from 'buffer/';

// Polyfill Buffer for the gray-matter library
(window as any).Buffer = Buffer;

// --- State Management ---
const selectedCase = ref<any>(null);
const caseStudies = ref<any[]>([]);
const isLoading = ref<boolean>(true);

// --- Methods ---
const loadCaseStudies = async () => {
  isLoading.value = true;
  try {
    const posts = import.meta.glob('../../_posts/*.md', { query: '?raw', import: 'default' });
    const loadedStudies = [];
    const slugRegex = /\/(\d{4}-\d{2}-\d{2})-(.*)\.md$/;

    for (const path in posts) {
      const rawContent = await posts[path]() as string;
      
      if (typeof rawContent !== 'string') {
        console.error(`Could not extract raw string content from module for path: ${path}`);
        continue;
      }

      const { data, content } = matter(rawContent);
      const htmlContent = await marked.parse(content);
      const match = path.match(slugRegex);
      
      if (match) {
        loadedStudies.push({
          ...data,
          slug: match[2],
          content: htmlContent,
        });
      }
    }
    // Sort by date, newest first
    loadedStudies.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    caseStudies.value = loadedStudies;

  } catch (error) {
    console.error('Failed to load case studies:', error);
  } finally {
    isLoading.value = false;
  }
};

const handleHashChange = () => {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (hash) {
    const study = caseStudies.value.find(s => s.slug === hash);
    selectedCase.value = study || null;
  } else {
    selectedCase.value = null;
  }
};

const selectCase = (caseStudy: any) => {
  window.location.hash = caseStudy.slug;
};

const goBackToList = () => {
  window.location.hash = '';
};

// --- Lifecycle Hooks ---
onMounted(async () => {
  await loadCaseStudies();
  handleHashChange(); 
  window.addEventListener('hashchange', handleHashChange);
});

onUnmounted(() => {
  window.removeEventListener('hashchange', handleHashChange);
});
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
        <div class="diagram-area">
          <svg viewBox="0 0 900 400" width="100%" height="100%" style="font-family: 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace;">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#D1D1D1" />
              </marker>
            </defs>
            <text x="110" y="25" text-anchor="middle" font-size="1rem" font-weight="bold" fill="#555">Legacy</text>
            <text x="450" y="25" text-anchor="middle" font-size="1rem" font-weight="bold" fill="#1CB6BE">Refactoring</text>
            <text x="790" y="25" text-anchor="middle" font-size="1rem" font-weight="bold" fill="#555">Modern</text>
            <line x1="220" y1="90" x2="360" y2="200" stroke="#D1D1D1" stroke-width="2"></line>
            <line x1="220" y1="200" x2="360" y2="200" stroke="#D1D1D1" stroke-width="2"></line>
            <line x1="220" y1="310" x2="360" y2="200" stroke="#D1D1D1" stroke-width="2"></line>
            <line x1="540" y1="200" x2="680" y2="90" stroke="#D1D1D1" stroke-width="2" marker-end="url(#arrowhead)"></line>
            <line x1="540" y1="200" x2="680" y2="200" stroke="#D1D1D1" stroke-width="2" marker-end="url(#arrowhead)"></line>
            <line x1="540" y1="200" x2="680" y2="310" stroke="#D1D1D1" stroke-width="2" marker-end="url(#arrowhead)"></line>
            <foreignObject x="0" y="50" width="220" height="80"><div class="diagram-box legacy-box">Untestable <br/>Spaghetti Code</div></foreignObject>
            <foreignObject x="0" y="160" width="220" height="80"><div class="diagram-box legacy-box">Monolithic Architecture <br/>Legacy Stack</div></foreignObject>
            <foreignObject x="0" y="270" width="220" height="80"><div class="diagram-box legacy-box">Unoptimized Schema <br/>& Legacy SQL</div></foreignObject>
            <polygon points="450 110, 540 200, 450 290, 360 200" fill="#1CB6BE" stroke="#148E95" stroke-width="2px" />
            <foreignObject x="360" y="160" width="180" height="80"><div class="diamond-text-wrapper"><div class="diamond-text"><b>Architecture<br/>Refactoring</b></div></div></foreignObject>
            <foreignObject x="680" y="50" width="220" height="80"><div class="diagram-box modern-box">Clean Architecture <br/>& Design Pattern</div></foreignObject>
            <foreignObject x="680" y="160" width="220" height="80"><div class="diagram-box modern-box">Cloud-Native Stack <br/>MSA-based System</div></foreignObject>
            <foreignObject x="680" y="270" width="220" height="80"><div class="diagram-box modern-box">Database Refactoring <br/>& Performance Tuning</div></foreignObject>
          </svg>
        </div>

        <h1>[ 구축사례 목록 ]</h1>
        <div v-if="isLoading">
          <p>구축사례를 불러오는 중입니다...</p>
        </div>
        <div v-else>
          <div v-if="caseStudies.length === 0">
            <p>등록된 구축사례가 없습니다.</p>
          </div>
          <div v-for="c in caseStudies" :key="c.slug" class="case-list-item" @click="selectCase(c)">
            <div class="item-header">
              <h2>{{ c.title }}</h2>
              <span class="item-date">{{ c.date }}</span>
            </div>
            <p>{{ c.summary }}</p>
            <span v-if="!c.ready" class="status-badge">[ 준비중 ]</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Detail View -->
    <div v-if="selectedCase">
       <div class="terminal-line">
        <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
        <span class="command">./show-case-projects.sh --case={{ selectedCase.slug }}</span>
      </div>
       <div class="output">
        <button @click="goBackToList" class="back-button">[ < 목록으로 돌아가기 ]</button>
        
        <h1>{{ selectedCase.title }}</h1>
        <div class="item-date detail-date">{{ selectedCase.date }}</div>

        <div v-if="selectedCase.ready">
          <div class="markdown-content" v-html="selectedCase.content"></div>
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
h1, h2 { color: var(--krds-blue); font-weight: bold; margin-bottom: 1.5rem; }
h1 { font-size: 1.5rem; margin-top: 2.5rem; }
h2 { font-size: 1.3rem; margin: 0; }
p { line-height: 1.7; margin-bottom: 1rem; }
.case-list-item { border: 1px solid var(--krds-gray-light); padding: 1.5rem; margin-bottom: 1rem; border-radius: 8px; cursor: pointer; transition: background-color 0.2s, border-color 0.2s; }
.case-list-item:hover { background-color: var(--krds-surface); border-color: var(--krds-blue); }
.case-list-item p { margin-top: 1rem; margin-bottom: 0; }
.item-header { display: flex; justify-content: space-between; align-items: center; }
.item-date { color: var(--krds-text-secondary); font-size: 0.9rem; }
.detail-date { margin-bottom: 2rem; }
.status-badge { display: inline-block; margin-top: 1rem; padding: 0.25rem 0.5rem; background-color: var(--krds-gray-light); color: var(--krds-text-secondary); border-radius: 4px; font-size: 0.8rem; }
.back-button { background: none; border: none; color: var(--krds-blue); cursor: pointer; font-size: 1rem; margin-bottom: 2rem; padding: 0; }
.back-button:hover { text-decoration: underline; }
.output { color: var(--krds-text-secondary); }
.prompt-user { color: var(--krds-text-username); font-weight: bold; }
.prompt-symbol { color: var(--krds-text-primary); margin-right: 0.5rem; }
.command { color: var(--krds-text-primary); }

/* --- SVG Diagram Styles --- */
.diagram-area { padding: 1rem 0; margin-top: 1rem; margin-bottom: 3rem; }
.diagram-box { padding: 1rem; border-radius: 8px; text-align: center; line-height: 1.4; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; box-sizing: border-box; font-size: 0.9rem; }
.legacy-box { background-color: #F2F2F2; border: 2px solid #D1D1D1; color: #555; }
.modern-box { background-color: #E8F8F9; border: 2px solid #1CB6BE; color: #0E5B60; }
.diamond-text-wrapper { width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }
.diamond-text { color: #fff; text-align: center; line-height: 1.4; font-size: 0.9rem; }

/* Styles for rendered markdown content */
.markdown-content:deep(h3) {
  font-size: 1.1rem;
  color: var(--krds-green);
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
}
.markdown-content:deep(ul) {
  list-style: none;
  padding-left: 1rem;
}
.markdown-content:deep(li) {
  margin-bottom: 0.5rem;
}
.markdown-content:deep(strong) {
  color: var(--krds-text-primary);
}
</style>
