import{A as s}from"./UIcon.bed52dd6.js";const m=`# Svelte\r
\r
---\r
\r
[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.\r
\r
The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.\r
\r
<br/>\r
\r
Svelte is :\r
\r
- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.\r
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.\r
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.\r
\r
<br/>\r
\r
## Example\r
\r
\`\`\`ts\r
<script>\r
    let count = 1;\r
    $: doubled = count * 2;\r
<\/script>\r
\r
<p>{count} * 2 = {doubled}</p>\r
\r
<button on:click={() => count = count + 1}>Count</button>\r
\`\`\`\r
\r
### Heading 3\r
\r
#### Heading 4\r
\r
##### Heading 5\r
\r
###### Heading 6\r
\r
> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.\r
`;function d(e,...t){const a=Object.assign({},e);return Object.keys(a).forEach(n=>{t.includes(n)&&delete a[n]}),a}const i=e=>e,p=[i({name:"Programming Languages",slug:"pro-lang"}),i({name:"Frameworks",slug:"framework"}),i({name:"Libraries",slug:"library"}),i({name:"Languages",slug:"lang"}),i({name:"Databases",slug:"db"}),i({name:"ORMs",slug:"orm"}),i({name:"DevOps",slug:"devops"}),i({name:"Testing",slug:"test"}),i({name:"Dev Tools",slug:"devtools"}),i({name:"Markup & Style",slug:"markup-style"}),i({name:"Design",slug:"design"}),i({name:"Soft Skills",slug:"soft"})],r=e=>{const t=d(e,"category");return e.category&&(t.category=p.find(a=>a.slug===e.category)),t},c=[r({slug:"python",color:"blue",description:`I have extensive experience in Python, with a strong focus on audio processing and machine learning applications.
The object-oriented programming skills I built during my bachelor's degree and Java projects carry over to Python applications that benefit from scalable, modular architectures.
I am fluent in the most widely adopted ML and DL libraries.

I used PyTorch in one of my key projects, MambaFoley, which also showcases my work on diffusion-based models for Foley sound generation. This project leverages Selective State-Space Models (SSMs) to enhance audio sequence modeling, reflecting my ability to apply advanced machine learning techniques to creative audio synthesis.
The MAEC-L04-Music-Generation project builds on Google Magenta's MusicVAE using TensorFlow and Keras, showing extensive use of that framework as well.
Other key packages, such as NumPy, pandas and scikit-learn, were learned and applied during my university career and for personal projects.

To sum it up, my Python work includes tools for data manipulation, algorithm optimization and common Machine Learning and Deep Learning libraries.`,logo:s.Python,name:"Python",category:"pro-lang"}),r({slug:"java",color:"orange",description:`I have a solid foundation in Java, which has been instrumental in my education, particularly in understanding software architectures and object-oriented programming (OOP).

 Java's emphasis on OOP principles has helped me grasp the design and implementation of scalable and maintainable systems. For example, in the project AdrenalineJavaPort, I developed in a team a distributed board game application, implementing key architectural patterns like MVC and leveraging Java's concurrency tools. 
This experience, many years ago, was my first encounter with more complex architectures and started the development of my skills in creating robust, modular codebases and deepened my understanding of how architectural choices impact system performance and user experience.`,logo:s.Java,name:"Java",category:"pro-lang"}),r({slug:"js",color:"yellow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:s.JavaScript,name:"Javascript",category:"pro-lang"}),r({slug:"c",color:"light-blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:s.C,name:"C",category:"pro-lang"}),r({slug:"css",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:s.CSS,name:"CSS",category:"markup-style"}),r({slug:"html",color:"orange",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:s.HTML,name:"HTML",category:"markup-style"}),r({slug:"reactjs",color:"cyan",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:s.ReactJs,name:"React Js",category:"library"}),r({slug:"svelte",color:"orange",description:m,logo:s.Svelte,name:"Svelte",category:"library"})],h="Skills",b=(...e)=>c.filter(t=>e.includes(t.slug)),v=e=>{const t=[],a=[];return c.forEach(n=>{if(e.trim()&&!n.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!n.category){a.push(n);return}let o=t.find(l=>{var u;return l.category.slug===((u=n.category)==null?void 0:u.slug)});o||(o={items:[],category:n.category},t.push(o)),o.items.push(n)}),a.length!==0&&t.push({category:{name:"Others",slug:"others"},items:a}),t};export{v as a,b as g,c as i,h as t};
