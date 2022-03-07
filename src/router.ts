import {createWebHashHistory, createRouter} from 'vue-router'
import Doc from './views/Doc.vue'
import Home from './views/Home.vue'
import TabsDemo from './components/tabs/TabsDemo.vue'
import InputDemo from './components/inputs/InputDemo.vue'
import SwitchDemo from './components/switchs/SwitchDemo.vue'
import ButtonDemo from './components/buttons/ButtonDemo.vue'
import DialogDemo from './components/dialogs/DialogDemo.vue'
import SkeletonDemo from './components/skeletons/SkeletonDemo.vue'
import BreadDemo from './components/breads/BreadDemo.vue'
import {h} from 'vue';
import intro from './markdown/intro.md'
import start from './markdown/start.md'
import install from './markdown/install.md'
import Markdown from './components/Markdown.vue';

const history = createWebHashHistory()
const md = string => h(Markdown, {content: string, key: string})
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'},
        {path: "intro", component: md(intro)},
        {path: "start", component: md(start)},
        {path: "install", component: md(install)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'input', component: InputDemo},
        {path: 'skeleton', component: SkeletonDemo},
        {path: 'bread', component: BreadDemo},
      ]
    }
  ]
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})