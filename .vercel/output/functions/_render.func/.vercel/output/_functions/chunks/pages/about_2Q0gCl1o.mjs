import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, f as renderSlot, u as unescapeHTML } from '../astro_M3CLt_ij.mjs';
import 'kleur/colors';
import 'clsx';
import { S as SITE, c as $$Layout, a as $$Header, b as $$Footer } from './404_jXSzlu6i.mjs';
import { $ as $$Breadcrumbs } from './_page__pQooWgaV.mjs';

const $$Astro = createAstro("https://frequency-forum.pages.dev/");
const $$AboutLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "about" })} ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, {})} ${maybeRenderHead()}<main id="main-content"> <section id="about" class="prose mb-28 max-w-3xl prose-img:border-0"> <h1 class="text-2xl tracking-wider sm:text-3xl">${frontmatter.title}</h1> ${renderSlot($$result2, $$slots["default"])} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Joel/Documents/Projects/Blog_Telecomunicaciones/src/layouts/AboutLayout.astro", void 0);

const html = "<p>FrequencyForum es un espacio en línea dedicado a abordar temas relevantes en el ámbito de las comunicaciones y la teoría de las ondas. Nuestro blog de telecomunicaciones es el lugar ideal para profesionales y entusiastas de la tecnología de la información, que deseen indagar temas como frecuencias, cambios de frecuencia, GMRS y otros aspectos relacionados.</p>\n<div>\n<img src=\"/assets/frequency.svg\" class=\"sm:w-1/2 mx-auto\" alt=\"frequency colors illustration\">\n</div>\n<p>Nuestra comunidad se esfuerza por fomentar un ambiente acogedor donde se promueva el intercambio de conocimientos y la colaboración entre expertos en el campo. <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\">Únete</a> a nosotros para ampliar tu comprensión en este apasionante ámbito.</p>\n<h2 id=\"tech-stack\">Tech Stack</h2>\n<p>Este proyecto se encuentra desarrollado en JavaScript vainilla (+ TypeScript para la comprobación de tipos) y un poco de ReactJS para ciertas interacciones. TailwindCSS se utiliza para el estilo y Markdown para el contenido del blog.</p>\n<div>\n  <img src=\"/assets/dev.svg\" class=\"sm:w-1/2 mx-auto\" alt=\"coding dev illustration\">\n</div>\n<h2 id=\"authors\">Authors</h2>\n<h3 id=\"joel-abreu\">Joel Abreu</h3>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#ABB2BF\">software_engineers.</span><span style=\"color:#61AFEF\">append</span><span style=\"color:#ABB2BF\">(</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">    Person</span><span style=\"color:#ABB2BF\">(</span></span>\n<span class=\"line\"><span style=\"color:#E06C75;font-style:italic\">        alias</span><span style=\"color:#56B6C2\">=</span><span style=\"color:#98C379\">\"@j4breu\"</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75;font-style:italic\">        philosophy</span><span style=\"color:#56B6C2\">=</span><span style=\"color:#98C379\">\"enough > perfection\"</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75;font-style:italic\">        interesest</span><span style=\"color:#56B6C2\">=</span><span style=\"color:#98C379\">\"Software Arquitecture\"</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75;font-style:italic\">        social</span><span style=\"color:#56B6C2\">=</span><span style=\"color:#ABB2BF\">[</span><span style=\"color:#98C379\">\"&#x3C;p>Gmail&#x3C;/p>joelabreurojas@gmail.com\"</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#98C379\">\"https://github.com/j4breu\"</span><span style=\"color:#ABB2BF\">]</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">    )</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">)</span></span></code></pre>\n<h3 id=\"luis-brito\">Luis Brito</h3>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#ABB2BF\">software_engineers.</span><span style=\"color:#61AFEF\">append</span><span style=\"color:#ABB2BF\">(</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">    Person</span><span style=\"color:#ABB2BF\">(</span></span>\n<span class=\"line\"><span style=\"color:#E06C75;font-style:italic\">        alias</span><span style=\"color:#56B6C2\">=</span><span style=\"color:#98C379\">\"@Mstaz4\"</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75;font-style:italic\">        philosophy</span><span style=\"color:#56B6C2\">=</span><span style=\"color:#98C379\">\"still learning\"</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75;font-style:italic\">        interesest</span><span style=\"color:#56B6C2\">=</span><span style=\"color:#98C379\">\"Computer Science\"</span></span>\n<span class=\"line\"><span style=\"color:#E06C75;font-style:italic\">        social</span><span style=\"color:#56B6C2\">=</span><span style=\"color:#ABB2BF\">[</span><span style=\"color:#98C379\">\"br1toluis0602@gmail.com\"</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#98C379\">\"https://github.com/Mstaz4\"</span><span style=\"color:#ABB2BF\">]</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">    )</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">)</span></span></code></pre>\n<p>Si te gusta este proyecto, no dudes en darnos una estrella o contribuir en nuestro <a href=\"https://github.com/Mstaz4/Blog_Telecomunicaciones\">repositorio</a>.</p>";

				const frontmatter = {"layout":"../layouts/AboutLayout.astro","title":"About"};
				const file = "C:/Users/Joel/Documents/Projects/Blog_Telecomunicaciones/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "FrequencyForum es un espacio en línea dedicado a abordar temas relevantes en el ámbito de las comunicaciones y la teoría de las ondas. Nuestro blog de telecomunicaciones es el lugar ideal para profesionales y entusiastas de la tecnología de la información, que deseen indagar temas como frecuencias, cambios de frecuencia, GMRS y otros aspectos relacionados.\r\n\r\n<div>\r\n<img src=\"/assets/frequency.svg\" class=\"sm:w-1/2 mx-auto\" alt=\"frequency colors illustration\">\r\n</div>\r\n\r\nNuestra comunidad se esfuerza por fomentar un ambiente acogedor donde se promueva el intercambio de conocimientos y la colaboración entre expertos en el campo. [Únete](https://www.youtube.com/watch?v=dQw4w9WgXcQ) a nosotros para ampliar tu comprensión en este apasionante ámbito.\r\n\r\n## Tech Stack\r\n\r\nEste proyecto se encuentra desarrollado en JavaScript vainilla (+ TypeScript para la comprobación de tipos) y un poco de ReactJS para ciertas interacciones. TailwindCSS se utiliza para el estilo y Markdown para el contenido del blog.\r\n\r\n<div>\r\n  <img src=\"/assets/dev.svg\" class=\"sm:w-1/2 mx-auto\" alt=\"coding dev illustration\">\r\n</div>\r\n\r\n## Authors\r\n\r\n### Joel Abreu\r\n\r\n```python\r\nsoftware_engineers.append(\r\n    Person(\r\n        alias=\"@j4breu\",\r\n        philosophy=\"enough > perfection\",\r\n        interesest=\"Software Arquitecture\",\r\n        social=[\"<p>Gmail</p>joelabreurojas@gmail.com\", \"https://github.com/j4breu\"]\r\n    )\r\n)\r\n```\r\n\r\n### Luis Brito\r\n\r\n```python\r\nsoftware_engineers.append(\r\n    Person(\r\n        alias=\"@Mstaz4\",\r\n        philosophy=\"still learning\",\r\n        interesest=\"Computer Science\"\r\n        social=[\"br1toluis0602@gmail.com\", \"https://github.com/Mstaz4\"]\r\n    )\r\n)\r\n```\r\n\r\nSi te gusta este proyecto, no dudes en darnos una estrella o contribuir en nuestro [repositorio](https://github.com/Mstaz4/Blog_Telecomunicaciones).\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"tech-stack","text":"Tech Stack"},{"depth":2,"slug":"authors","text":"Authors"},{"depth":3,"slug":"joel-abreu","text":"Joel Abreu"},{"depth":3,"slug":"luis-brito","text":"Luis Brito"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AboutLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
