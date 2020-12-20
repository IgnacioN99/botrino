(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return m})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(8),o=(t(0),t(92)),i={title:"Overview"},m={unversionedId:"command-extension/overview",id:"command-extension/overview",isDocsHomePage:!1,title:"Overview",description:"Botrino comes with an extension that allows to easily create commands based on message create events. Although Discord recently added Slash Commands as a native way to implement commands within Discord, message create-based commands will certainly remain the most flexible solution.",source:"@site/docs/command-extension/overview.md",slug:"/command-extension/overview",permalink:"/docs/command-extension/overview",editUrl:"https://github.com/Alex1304/botrino/edit/main/website/docs/command-extension/overview.md",version:"current",sidebar:"someSidebar",previous:{title:"Internationalization",permalink:"/docs/api/i18n"},next:{title:"The command service",permalink:"/docs/command-extension/the-command-service"}},c=[{value:"Preamble",id:"preamble",children:[]},{value:"Features",id:"features",children:[]},{value:"Code examples",id:"code-examples",children:[]},{value:"Getting started",id:"getting-started",children:[]}],s={rightToc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Botrino comes with an extension that allows to easily create commands based on message create events. Although Discord recently added ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://discord.com/developers/docs/interactions/slash-commands"}),"Slash Commands")," as a native way to implement commands within Discord, message create-based commands will certainly remain the most flexible solution."),Object(o.b)("h2",{id:"preamble"},"Preamble"),Object(o.b)("p",null,"By definition, as this is an extension, it does not belong to the core framework API and you are not required to use it. It aims at giving you enough flexibility to cover the majority of use cases, but for very specific ones you might need to implement your own solution. That's why feedback on this extension is more than welcome, if you feel something is missing feel free to open an issue on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Alex1304/botrino"}),"GitHub repository"),"."),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Register unlimited commands"),Object(o.b)("li",{parentName:"ul"},"Message tokenization into arguments and flags"),Object(o.b)("li",{parentName:"ul"},"Apply a grammar to command arguments to conveniently convert them into actual Java types, supporting required, optional, and varying arguments"),Object(o.b)("li",{parentName:"ul"},"Unlimited subcommands"),Object(o.b)("li",{parentName:"ul"},"Attach a documentation to all your commands and subcommands"),Object(o.b)("li",{parentName:"ul"},"Define privileges for each command with your own rules"),Object(o.b)("li",{parentName:"ul"},"Global and per-command error handling"),Object(o.b)("li",{parentName:"ul"},"Process message create events to filter them, or to adapt prefix and language"),Object(o.b)("li",{parentName:"ul"},"Rate-limiting / cooldowns"),Object(o.b)("li",{parentName:"ul"},"Interactive menus")),Object(o.b)("h2",{id:"code-examples"},"Code examples"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The examples below make use of translated strings, they are assumed to exist in properties files as described in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/i18n"}),"this page"),"."))),Object(o.b)("p",null,"A basic ",Object(o.b)("inlineCode",{parentName:"p"},"!ping")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package com.example.myproject;\n\nimport botrino.command.Command;\nimport botrino.command.CommandContext;\nimport reactor.core.publisher.Mono;\n\nimport java.util.Set;\n\npublic final class PingCommand implements Command {\n\n    @Override\n    public Set<String> aliases() {\n        return Set.of("ping");\n    }\n\n    @Override\n    public Mono<Void> run(CommandContext ctx) {\n        return ctx.channel().createMessage(ctx.translate(Strings.APP, "ping")).then();\n    }\n}\n')),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"!sendword <word> <count> [channels...]")," command that sends a word ",Object(o.b)("inlineCode",{parentName:"p"},"count")," times in zero, one or more channels. Requires ",Object(o.b)("inlineCode",{parentName:"p"},"ADMINISTRATOR")," permission and may be used at most once every 1 minute:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package com.example.myproject;\n\nimport botrino.command.Command;\nimport botrino.command.CommandContext;\nimport botrino.command.grammar.ArgumentMapper;\nimport botrino.command.grammar.CommandGrammar;\nimport botrino.command.privilege.Privilege;\nimport botrino.command.privilege.Privileges;\nimport botrino.command.ratelimit.RateLimit;\nimport discord4j.core.object.entity.channel.GuildChannel;\nimport discord4j.core.object.entity.channel.GuildMessageChannel;\nimport discord4j.rest.util.Permission;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\n\nimport java.time.Duration;\nimport java.util.List;\nimport java.util.Set;\n\npublic final class SendWordCommand implements Command {\n\n    private final CommandGrammar<Args> grammar = CommandGrammar.builder()\n            .nextArgument("word")\n            .nextArgument("count", ArgumentMapper.asInteger())\n            .nextArgument("channels", ArgumentMapper.asGuildChannel())\n            .setVarargs(true)\n            .build(Args.class);\n\n    @Override\n    public Set<String> aliases() {\n        return Set.of("sendword");\n    }\n\n    @Override\n    public Mono<Void> run(CommandContext ctx) {\n        return grammar.resolve(ctx)\n                .flatMap(args -> Flux.fromIterable(args.channels)\n                        .ofType(GuildMessageChannel.class)\n                        .flatMap(channel -> Flux.range(0, args.count)\n                                .flatMap(__ -> channel.createMessage(args.word))\n                                .then())\n                        .then());\n    }\n\n    @Override\n    public RateLimit rateLimit() {\n        return RateLimit.of(1, Duration.ofMinutes(1));\n    }\n\n    @Override\n    public Privilege privilege() {\n        return Privileges.checkPermissions(\n                tr -> tr.translate(Strings.APP, "error_perm_denied"),\n                perms -> perms.contains(Permission.ADMINISTRATOR));\n    }\n\n    private static final class Args {\n        private String word;\n        private int count;\n        private List<GuildChannel> channels;\n    }\n}\n')),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("p",null,"Using the Maven archetype as outlined in Botrino's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started"}),"Getting Started guide")," will automatically configure the command extension for you. The section ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started#from-a-blank-project"}),'"From a blank project"')," explains how to go for a more manual approach, and the guide already shows how to configure the command extension. Simply make sure to include the ",Object(o.b)("inlineCode",{parentName:"p"},"botrino-command")," artifact in your project dependencies and to add ",Object(o.b)("inlineCode",{parentName:"p"},"requires botrino.command;")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"module-info.java"),", and you're ready to go."))}l.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,b=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return t?r.a.createElement(b,m(m({ref:n},s),{},{components:t})):r.a.createElement(b,m({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var m={};for(var c in n)hasOwnProperty.call(n,c)&&(m[c]=n[c]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);