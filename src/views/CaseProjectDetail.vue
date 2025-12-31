<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Buffer } from 'buffer/';

// Polyfill
(window as any).Buffer = Buffer;

const route = useRoute();
const router = useRouter();

const project = ref<any>(null);
const isLoading = ref(true);

const loadProject = async () => {
  isLoading.value = true;
  const date = route.params.date;
  const slug = route.params.slug;

  const posts = import.meta.glob('../../_posts/*.md', { query: '?raw', import: 'default' });
  const slugRegex = /\/(\d{4}-\d{2}-\d{2})-(.*)\.md$/;

  for (const path in posts) {
    const match = path.match(slugRegex);
    if (match && match[1] === date && match[2] === slug) {
      const post = posts[path];
      if (post) {
        const rawContent = await post() as string;
        const { data, content } = matter(rawContent);
        const htmlContent = await marked.parse(content);

        project.value = {
          ...data,
          slug: match[2],
          date: match[1],
          content: htmlContent,
        };
      }
      break;
    }
  }
  isLoading.value = false;
};

const goBackToList = () => {
  router.push('/case-projects');
};

onMounted(loadProject);
</script>

<template>
  <div class="content-container">
    <div v-if="isLoading">
      <p>프로젝트를 불러오는 중입니다...</p>
    </div>
    <div v-else-if="project">
      <div class="terminal-line">
        <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
        <span class="command">./show-case-projects.sh --case={{ project.date }}-{{ project.slug }}</span>
      </div>
      <div class="output">
        <button @click="goBackToList" class="back-button">[ < 목록으로 돌아가기 ]</button>
        
        <h1>{{ project.title }}</h1>
        <div class="item-date detail-date">{{ project.date }}</div>

        <div v-if="project.ready">
          <div class="markdown-content" v-html="project.content"></div>
        </div>
        <div v-else>
          <p>해당 구축사례의 상세 내용은 현재 준비중입니다. 곧 업데이트될 예정입니다.</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>프로젝트를 찾을 수 없습니다.</p>
       <button @click="goBackToList" class="back-button">[ < 목록으로 돌아가기 ]</button>
    </div>
  </div>
</template>

<style scoped>
/* Copied from CaseProjects.vue, can be refactored later into a common css file */
.content-container { padding: 2rem; max-width: 1280px; margin: 0 auto; font-family: 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace; }
.terminal-line { line-height: 1.5; margin-bottom: 2rem; }
h1 { color: var(--krds-blue); font-weight: bold; margin-bottom: 1.5rem; font-size: 1.5rem; margin-top: 2.5rem; }
.item-date { color: var(--krds-text-secondary); font-size: 0.9rem; }
.detail-date { margin-bottom: 2rem; }
.back-button { background: none; border: none; color: var(--krds-blue); cursor: pointer; font-size: 1rem; margin-bottom: 2rem; padding: 0; }
.back-button:hover { text-decoration: underline; }
.output { color: var(--krds-text-secondary); }
.prompt-user { color: var(--krds-text-username); font-weight: bold; }
.prompt-symbol { color: var(--krds-text-primary); margin-right: 0.5rem; }
.command { color: var(--krds-text-primary); }

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
