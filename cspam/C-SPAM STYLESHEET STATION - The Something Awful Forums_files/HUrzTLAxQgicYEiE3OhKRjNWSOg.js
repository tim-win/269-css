;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="f68a020c4a4ae7c3b05b80fcdac965d0";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["3w7bSSvyIe_2"]={appId:"lMxPPXVOqmoE",scope:{}};;CloudflareApps.installs["3w7bSSvyIe_2"].options={"id":"UA-33089744-1","social":true};;CloudflareApps.installs["673nB_NBjq_Q"]={appId:"XzVIEqe1R2kW",scope:{}};;CloudflareApps.installs["673nB_NBjq_Q"].options={"chrome":30,"edge":14.14393,"firefox":45,"ie":9,"opera":20,"safari":0};;CloudflareApps.installs["6Vwo3SVDbbIW"]={appId:"nt4L5NPJq1za",scope:{}};;CloudflareApps.installs["6Vwo3SVDbbIW"].options={"blocks":[{"code":"\u003cli\u003e- \u003ca href=\"https://www.somethingawful.com/feature-articles/awful-merchandise/\"\u003eMerchandise!\u003c/a\u003e\u003c/li\u003e","location":{"method":"append","pages":{"URLPatterns":["^forums.somethingawful.com/?.*$"]},"selector":"ul#nav_purchase"}},{"code":"\u003clink href=\"https://fonts.googleapis.com/css?family=Roboto+Condensed\" rel=\"stylesheet\"\u003e\n\u003cscript src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"\u003e\u003c/script\u003e\n\u003clink rel=\"stylesheet\" href=\"https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css\"\u003e\n\u003cscript src=\"https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js\"\u003e\u003c/script\u003e","location":{"method":"append","pages":{"URLPatterns":["^somethingawful.com/?.*$","^www.somethingawful.com/?.*$"]},"selector":"head"}},{"code":"\u003cscript\u003e\ndocument.body.innerHTML = document.body.innerHTML.replace(/surprise sex/g, \"chomp wad\");\n\u003c/script\u003e","location":{"method":"append","pages":{"URLPatterns":["^archives.somethingawful.com/?.*$","^forums.somethingawful.com/?.*$"]},"selector":"head"}},{"code":"\u003cscript\u003e\nvar myEle = document.getElementById(\"loggedinusername\");\n    if(myEle){\n       $(\"body\").addClass(\"unregreader\");\n    }\n\u003c/script\u003e","location":{"method":"append","pages":{"URLPatterns":["^forums.somethingawful.com/?.*$"]},"selector":"head"}}]};;CloudflareApps.installs["6Vwo3SVDbbIW"].selectors={"blocks[0].location.selector":"ul#nav_purchase","blocks[1].location.selector":"head","blocks[2].location.selector":"head","blocks[3].location.selector":"head"};;CloudflareApps.installs["8jP1AVipo9vK"]={appId:"JI85SyC9e8es",scope:{}};;CloudflareApps.installs["8jP1AVipo9vK"].options={"instances":[{"align":"right","buttonsType":"inline","floatingHorizontal":{"hideOnDesktop":true,"placement":"center"},"floatingVertical":{"hideOnMobile":true,"placement":"left"},"iconStyle":{"bgColor":"#425661","color":"custom","fgColor":"#ffffff","floatingMargin":4,"padding":7,"radius":0.33,"size":28},"location":{"method":"prepend","pages":{"URLPatterns":[]},"selector":"td.postbody"},"services":[{"serviceCode":"facebook","serviceCodeOther":""},{"serviceCode":"twitter","serviceCodeOther":""},{"serviceCode":"addtoany","serviceCodeOther":""}],"shareTitle":"","showSharingOptions":true},{"align":"left","buttonsType":"inline","floatingHorizontal":{"hideOnDesktop":true,"placement":"center"},"floatingVertical":{"hideOnMobile":true,"placement":"left"},"iconStyle":{"bgColor":"#2d6c8c","color":"custom","fgColor":"#aed2e6","floatingMargin":4,"padding":6,"radius":0.34,"size":30},"location":{"method":"replace","pages":{"URLPatterns":["^somethingawful.com/?.*$","^www.somethingawful.com/?.*$"]},"selector":".social"},"services":[{"serviceCode":"facebook","serviceCodeOther":"","serviceCounter":false},{"serviceCode":"twitter","serviceCodeOther":""},{"serviceCode":"reddit","serviceCodeOther":"","serviceCounter":false},{"serviceCode":"addtoany","serviceCodeOther":"","serviceCounter":false},{"serviceCode":"__other","serviceCodeOther":"","serviceCounter":false}],"shareTitle":"","showSharingOptions":true}]};;CloudflareApps.installs["8jP1AVipo9vK"].selectors={"instances[0].location.selector":"td.postbody","instances[1].location.selector":".social"};;CloudflareApps.installs["DJtEmarQKFIS"]={appId:"qdbruf8Ud6a8",scope:{}};;CloudflareApps.installs["DJtEmarQKFIS"].options={"blocks":[]};;CloudflareApps.installs["r5NWRMs8PO4k"]={appId:"Y7XQHZ2XJNLN",scope:{}};;CloudflareApps.installs["r5NWRMs8PO4k"].options={"css":"@media { font-size: 12px; }\nhtml, body\n{ font-family: 'Roboto', sans-serif !important; -webkit-font-smoothing: subpixel-antialiased !important; text-rendering: optimizeLegibility !important; color: #333; font-size: 12px !important; line-height: 1.6em !important; }\nbody.sa.desktop.frontpage div.cavity.left\n{ margin-top: -5px !important; }\nbody.sa.desktop div.cavity div.organ.breadcrumbs\n{ margin-bottom: 4em; font-size: 1.2em; line-height: 1.6em; }\nbody.sa.desktop div.cavity div.organ\n{ margin-bottom: 32px !important; }\nbody.sa.desktop div.article_meta div.social\n{ top: 8px !important; }\nbody.sa.desktop div.cavity.left\n{ margin-top: -8px; }\nbody.sa.desktop div.article p.series_notice, body.sa.desktop.article_body p.series_notice\n{ font-weight: 700; font-size: 1.16em; font-style: italic; }\nbody.sa.desktop div.cavity div.organ.article_meta\n{ margin-bottom: 2em !important; }\nbody.sa.desktop.frontpage div.sirloin div.ribs div.brisket \n{ padding: 50px 25px !important; }\n\nbody.sa.desktop.frontpage div.a_info div.info p \n{ font-size: 1.25em !important; line-height: 1.5em !important; }\nbody.sa.desktop.frontpage div.organ.main_article div.a_info div.info p \n{ font-size: 1.4em !important; line-height: 1.4em !important; }\nbody.sa.desktop div.a_info div.info div.c_name, body.sa.desktop div.a_info div.info div.byline \n{ font-size: .9em !important; margin-bottom: .8em !important; }\nbody.sa.desktop div.cavity div.organ div.lining ul li\n{ margin-bottom: .7em !important; line-height: 1.5em !important; font-size: 1.25em !important; }\nbody.sa.desktop div.cavity div.organ.recent_articles ul li\n{ margin-bottom: 4em !important; }\nbody.sa.desktop div.a_info div.info div.byline, body.sa.desktop div.a_info div.info div.c_name a\n{ font-size: 1.1em !important; line-height: 1.5em !important; }\nbody.sa.desktop div.readmore\n{ font-size: 1.3em !important; }\nbody.sa.desktop div.cavity div.organ.alod\n{ font-size: 1.2em !important; padding: 1.3em !important; }\nbody.sa.desktop div.lining p\n{ font-size: 1.2em !important; line-height: 1.5em !important; }\nbody.sa.desktop div.article, body.article_body\n{ font-size: 1.3em !important; }\nbody.sa.desktop div.a_info div.info p\n{ font-size: 1.3em !important; line-height: 1.5em !important; }\nbody.sa.desktop div.organ.side_search form div.iwrapper input\n{ padding: .7em !important; width: 240px !important;  }\nbody.sa.desktop div.organ.side_search form div.iwrapper\n{ height: 34px !important; }\nbody.sa.desktop div.organ.side_search form button\n{ top: 0 !important; height: 34px !important; padding: 2px 8px !important; width: auto !important; }\nbody.sa.desktop div.organ.side_search form\n{ height: 60px !important; }\nbody.sa.desktop div.organ.side_search form.amazon \n{ visibility: hidden !important; height: 0 !important; }\nbody.sa.desktop div.cavity div.organ.popular_threads div.lining ul li a\n{ margin-left: 4px; }\n\nbody.sa.desktop div.cavity.left h1\n{ font-size: 200% !important; line-height: 1.4em !important; font-weight: 900 !important; }\nbody.sa.desktop div.article p, body.sa.desktop.article_body p\n{ line-height: 1.8em !important; margin: 0 0 28px 0 !important;}\nbody.sa.desktop div.organ.recent_articles img.normal, body.sa.desktop div.organ.recent_articles ul.featured a\n{ margin-top: 5px !important; }\nbody.sa.desktop div.organ.recent_articles div.a_info a.image\n{ background: none !important; }\nbody.sa.desktop div.cavity div.organ.popular_threads div.lining ul li img\n{ vertical-align: middle !important; }\nbody.sa.desktop div.organ.side_search div.links\n{ font-size: .9em !important; font-weight: normal !important; }\nbody.sa.mobile\n{ margin-bottom: 0 !important; }\nbody.sa.mobile div.cavity div.organ \n{ margin-bottom: 0 !important; }\nbody.sa.mobile div.cavity div.organ.article_nav\n{ margin: 1.8em 0; }\nbody.sa.mobile div.cavity div.organ.recent_articles, body.sa.mobile div.cavity div.organ.alod\n{  }\n\nbody.sa.mobile div.cavity div.organ.recent_articles div.a_info a.image.small\n{ width: 80px; height: 80px; -webkit-background-size: 80px 80px; -moz-background-size: 80px 80px; background-size: 80px 80px; }\nbody.sa.mobile div.cavity div.organ.recent_articles div.a_info a.image.small img.small\n{ width: 80px; height: 80px; }\n\nbody.sa.mobile div.cavity div.organ.recent_articles div.a_info a.image.normal, body.sa.mobile div.cavity div.organ.recent_articles div.a_info a.image.small\n{ margin-top: 4px; }\n\nbody.sa.mobile div.cavity div.organ.recent_articles h4\n{ visibility: hidden; height: 0; }\n\nbody.sa.mobile div.cavity div.organ.alod, body.sa.mobile div.cavity div.readmore\n{ visibility: hidden; height: 0; margin: 0 !important; }\nbody.sa.mobile div.cavity div.organ.main_article div.info h2, body.sa.mobile div.a_info div.info h3, body.sa.mobile div.cavity.left div.article_head h1, body.sa.desktop div.a_info div.info h3\n{ font-size: 1.8em; font-weight: 600; line-height: 1.2em !important; font-family: 'Roboto Condensed', sans-serif; }\nbody.sa.mobile div.cavity div.organ.main_article div.info h2\n{ font-size: 2em !important; font-weight: 700 !important; }\nbody.sa.mobile div.cavity.left div.article_head h1, body.sa.desktop div.a_info div.info h2\n{ font-size: 2.4em; line-height: 1.1em !important; font-weight: 600; margin-bottom: .4em; font-family: 'Roboto Condensed', sans-serif; box-sizing: border-box; }\nbody.sa.mobile div.cavity div.organ.main_article div.info\n{ margin-left: 0 !important; }\nbody.sa.mobile div.cavity div.organ.main_article div.info p, body.sa.mobile div.a_info div.info p \n{ font-size: 1.2em !important; line-height: 1.5em !important; }\nbody.sa.mobile div.cavity div.organ.recent_articles ul li\n{ margin-bottom: 1.8em !important; }\nbody.sa.mobile div.cavity div.organ.recent_articles ul li .info h3 a\n{ font-weight: 600; } \nbody.sa.mobile div.article_meta div.article_head\n{ padding-right: 0 !important; padding-bottom: 1em; }\nbody.sa.mobile div.article_meta div.social\n{ position: relative; height: 26px; vertical-align: middle; }\nbody.sa.mobile div.twitter_tweet, body.sa.mobile div.facebook_like\n{ display: inline-block !important; vertical-align: middle; height: 25px; }\nbody.sa.mobile div.facebook_like\n{ margin-left: 10px; }\nbody.sa.mobile div.article, body.sa.mobile.article_body\n{ font-size: 1.4em; line-height: 1.5em; }\nbody.sa.mobile div.article p, body.sa.mobile.article_body p\n{ line-height: 1.5em; }\nbody.sa.mobile div.article p.signoff, body.sa.mobile.article_body p.signoff\n{ font-weight: 400; }\nbody.sa.mobile div.cavity div.organ.article_meta, body.sa.mobile div.cavity.full.top\n{ margin-bottom: 1em !important; }\nbody.sa div.cavity div.organ.main_article a.image\n{ padding: 0 !important; margin-top: 4px; }\nbody.sa.mobile div.cavity .article_head span.date\n{  }\nbody.sa.mobile div.cavity .article_head span.authors\n{  }\n\nbody.sa.mobile .a2a_kit a:first-child\n{ padding-left: 0 !important; }\n[app=\"addtoany\"]\n{ margin-left: 0 !important; }\n\nbody.sa.mobile div.cavity div.organ div.lining\n{ padding: 0 !important; margin: 1em !important; }\nbody.sa.mobile div.cavity div.organ div.lining p\n{ font-size: 1.2em !important; line-height: 1.4em !important; }\nbody.sa.mobile div.cavity div.organ div.lining ul li\n{ width: max-content !important; line-height: 1.2em; white-space: nowrap; letter-spacing: -0.05em; background: url(//static.somethingawful.com/img/bullet-square-orange.png) no-repeat 0px 6px transparent; list-style-type: none; margin: 0; vertical-align: middle; padding: 0 0 .6em 1em; }\nbody.sa.mobile div.cavity div.organ div.lining ul li a\n{ font-size: 1.2em !important; line-height: 1.2em; }\nbody.sa.mobile div.cavity div.organ div.lining ul\n{ margin: 0; list-style: none; }\nbody.sa.mobile div.cavity div.organ div.lining ul li\n{ margin-bottom: 0; }\nbody.sa.mobile div.cavity div.organ.popular_threads div.lining ul li\n{ width: -webkit-fill-available; max-width: -webkit-fill-available; }\nbody.sa div.cavity.right h3\n{ font-family: 'Roboto Condensed', sans-serif; letter-spacing: .05em; border-width: 2px 2px 0 2px; border-color: #33434a; border-style: solid; margin: -2px -2px 0 -2px; padding: 8px !important; font-size: 1.5em !important; }\nbody.sa.mobile div.cavity div.organ.popular_threads div.lining ul li a\n{ letter-spacing: -0.05em; }\nbody.sa.mobile div.cavity div.organ.popular_threads div.lining ul li\n{ line-height: 15px !important; margin-bottom: .9em; background: none; padding-left: 0; padding-bottom: 0; }\nbody.sa.mobile div.cavity div.organ.popular_threads div.lining ul li:last-child\n{ margin-bottom: 0 !important; }\nbody.sa.mobile div.cavity div.organ.popular_threads div.lining ul li img\n{ margin-right: 8px; }\nbody.sa.mobile div.cavity div.organ.popular_threads div.lining ul li a\n{ line-height: inherit; vertical-align: baseline; }\nbody.sa.mobile [app=\"addtoany\"]\n{ position: fixed; top: 2px; right: 0; margin: 0; z-index: 6; }\nbody.sa.mobile .a2a_button_facebook.a2a_counter .a2a_count\n{ width: 0 !important; display: none !important; }\nbody.sa.mobile span.a2a_svg\n{ width: 20px !important; line-height: 20px !important; height: 20px !important; background-size: 20px !important; -webkit-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.69); box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.69); }\n\nbody.sa.article.desktop .organ.article li \n{ line-height: 1.8em !important; }\nbody.sa.article.mobile .organ.article li \n{ line-height: 1.4em !important; margin: .6em 0 .6em 1.8em !important; }\nbody.sa.article.mobile .organ.article ul li:first-child\n{ margin-top: 0 !important; }\nbody.sa.article.mobile .organ.article ul li:last-child\n{ margin-bottom: 0 !important; }\nbody.sa.mobile ul.pager li a, body.sa.mobile ul.pager li span\n{ padding: 0 !important; width: -webkit-fill-available; }\nbody.sa.mobile ul.pager li\n{ margin-left: 8px !important; }\nbody.sa.mobile ul.pager li.disabled\n{  }\nbody.sa.mobile div.sirloin div.ribs div.brisket\n{ background: none !important; }\nbody.sa.mobile div.chuck \n{ height: auto !important; }\nbody.sa.mobile div.chuck div.neck div.head\n{ height: 50px !important; }\nbody.sa.mobile div.chuck\n{ height: 76px !important; }\nbody.sa.mobile div.sirloin div.ribs\n{ border-width: 0; }\nbody.sa.mobile div.sirloin\n{ margin: 0 auto !important; }\nbody.sa.mobile div.rump div.leg\n{ border: none !important; }\n\nbody.sa.mobile div.cavity div.organ.pager\n{ width: 100%; height: 30px; max-height: 30px; line-height: 30px; margin-bottom: 2em !important; }\nbody.sa.mobile ul.pager\n{ width: max-content; height: 32px; display: block; padding: 0; margin: 0; float: right; }\nbody.sa.mobile ul.pager li\n{ max-width: 28px; max-height: 28px; line-height: 28px; width: 28px; height: 28px; display: inline-flex; margin-bottom: 0; }\nbody.sa.mobile ul.pager li:first-child\n{ margin-left: 0 !important; }\nbody.sa.mobile ul.pager li:last-child\n{ margin-right: 0 !important; }\nbody.sa.mobile ul.pager li:first-child a, body.sa.mobile ul.pager li:last-child a\n{ visibility: hidden; }\nbody.sa.mobile ul.pager li:first-child a::before\n{ visibility: visible; content: \"«\"; }\nbody.sa.mobile ul.pager li:last-child a::before\n{ visibility: visible; content: \"»\"; padding-left: 10px; }\nbody.sa.mobile div.cavity div.organ.article\n{ margin: 0 !important; }\n\nbody.sa.mobile div.sirloin div.ribs div.brisket\n{ padding: 1.4em 1em 0 1em !important; margin: 0; width: -webkit-fill-available; }\nbody.sa div.rump div.leg\n{ border-top-width: 0 !important; }\n\nbody.sa.mobile div.cavity.right, body.sa.mobile div.cavity.right div.organ\n{ width: -webkit-fill-available !important; }\nbody.sa.mobile div.cavity.right div.organ\n{ -webkit-box-shadow: none !important; box-shadow: none !important; margin-bottom: 2em !important; }\nbody.sa.mobile div.cavity.right div.organ.side_search\n{ margin-bottom: 0 !important; }\nbody.sa.mobile.frontpage div.cavity.right div.organ.side_search\n{ margin-bottom: 2em !important; }\n\ndiv.article_list ul li, div.article_list ul li \n{ padding: 2em 0 !important; }\n\nbody.sa div.cavity.right div.organ\n{ box-shadow: 3px 3px 1px #c2c2c2 !important; border: 2px solid #878787 !important;}"};;CloudflareApps.installs["r5NWRMs8PO4k"].URLPatterns=["^somethingawful.com/?.*$","^www.somethingawful.com/?.*$"];;CloudflareApps.installs["rg9agSxarYEA"]={appId:"Ek_0U0d0YWhZ",scope:{}};;CloudflareApps.installs["rg9agSxarYEA"].options={};;CloudflareApps.installs["rg9agSxarYEA"].URLPatterns=["^forums.somethingawful.com/newthread.php/?.*$"];;CloudflareApps.installs["tkwId5XUioM2"]={appId:"y88U-qEYDBGW",scope:{}};;CloudflareApps.installs["tkwId5XUioM2"].options={"emojis":[{"value":"thumbsup"},{"value":"thumbsdown"},{"value":"heart"},{"value":"cry"},{"value":"laughing"}],"location":{"method":"append","selector":"body \u003e .sirloin \u003e .ribs \u003e .brisket \u003e .cavity.left \u003e .organ.article \u003e .signoff"},"position":"center"};;CloudflareApps.installs["tkwId5XUioM2"].URLPatterns=["^www.somethingawful.com/feature-articles/awful-merchandise/?.*$"];;CloudflareApps.installs["tkwId5XUioM2"].selectors={"location.selector":"body \u003e .sirloin \u003e .ribs \u003e .brisket \u003e .cavity.left \u003e .organ.article \u003e .signoff"};;if(CloudflareApps.matchPage(CloudflareApps.installs['6Vwo3SVDbbIW'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['6Vwo3SVDbbIW'].options
var elements={}
var prevElements={}
var initialized=false;function updateElements(){options.blocks.forEach(function(block,index){var locationHash=[block.location.selector,block.location.method,index].join('!')
var element
if(elements[locationHash]){element=elements[locationHash]}else{if(block.location.method==='replace'){prevElements[locationHash]=document.querySelector(block.location.selector)}
element=CloudflareApps.createElement(block.location)
elements[locationHash]=element}
element.foundInBlocks=true
element.innerHTML=block.code
var scripts=Array.prototype.slice.call(element.querySelectorAll('script'))
if(scripts){scripts.forEach(function(script){var newScript=document.createElement('script')
for(var key=script.attributes.length;key--;){var attr=script.attributes[key]
if(attr.specified){newScript.setAttribute(attr.name,attr.value)}}
newScript.innerHTML=script.innerHTML
element.replaceChild(newScript,script)})}})
for(var hash in elements){if(!elements[hash].foundInBlocks){if(prevElements[hash]){elements[hash].parentNode.replaceChild(prevElements[hash],elements[hash])
delete prevElements[hash]}else{elements[hash].parentNode.removeChild(elements[hash])}
delete elements[hash]}else{delete elements[hash].foundInBlocks}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){if(initialized==false){initialized=true;updateElements();}})}else{updateElements()}
window.CloudflareApps.installs['6Vwo3SVDbbIW'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['8jP1AVipo9vK'].URLPatterns)){(function(){'use strict'
if(!window.addEventListener)return
var options=CloudflareApps.installs['8jP1AVipo9vK'].options
var isPreview="8jP1AVipo9vK"==='preview'
var previewElements=[]
window.a2a_config=window.a2a_config||{}
window.a2a_config.onclick=2
var vendorScript=document.createElement('script')
vendorScript.src='https://static.addtoany.com/menu/page.js'
document.head.appendChild(vendorScript)
function injectStyles(rule){var div=document.createElement('div')
var styleId='cloudflare-addtoany-style'
var style=document.getElementById(styleId)
if(style)style.parentNode.removeChild(style)
div.innerHTML='&shy;<style id="'+styleId+'">'+rule+'</style>'
document.head.appendChild(div.childNodes[1])}
function escapeAttr(string){var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}
return string.replace(/[&<>"']/g,function(chr){return htmlEscapes[chr]})}
function updateElements(){previewElements=[]
var css=''
options.instances.forEach(function(instanceOptions,index){var element=CloudflareApps.createElement(instanceOptions.location)
if(!element||!element.parentNode)return
if(isPreview){previewElements.push(element)}
var buttonsType=instanceOptions.buttonsType
var isFloating=instanceOptions.buttonsType==='floating'
var buttonsTypeAttrSelector=buttonsType==='floating'?'[type="floating"]':'[type="inline"]'
var vertical=instanceOptions.floatingVertical
var verticalPlacement=vertical.placement
element.setAttribute('app','addtoany')
if(isFloating){element.setAttribute('type','floating')}else{element.setAttribute('type','inline')
element.setAttribute('data-align',instanceOptions.align)}
var iconSize=instanceOptions.iconStyle.size||32
var iconColorAttr=''
if(instanceOptions.iconStyle.color==='custom'){iconColorAttr=' data-a2a-icon-color="'+instanceOptions.iconStyle.bgColor+','+instanceOptions.iconStyle.fgColor+'"'}
var elementSelector='cloudflare-app[app="addtoany"]'+buttonsTypeAttrSelector
var radius=(iconSize/2*instanceOptions.iconStyle.radius).toFixed(2)+'px'
css=css+
elementSelector+' .a2a_svg,'+
elementSelector+' .a2a_count'+'{border-radius:'+radius+'!important;}'
var padding=(instanceOptions.iconStyle.padding/2)+'px'
css+=elementSelector+' .a2a_kit a{padding:'+padding+';}'
if(isFloating){var margin=instanceOptions.iconStyle.floatingMargin+'px'
css+=elementSelector+' .a2a_kit.a2a_vertical_style{margin-'+verticalPlacement+':'+margin+';}'
css+=elementSelector+' .a2a_kit.a2a_default_style{margin-bottom:'+margin+';}'}
var shareUrlAttr=''
if(instanceOptions.shareURL){shareUrlAttr=' data-a2a-url="'+escapeAttr(instanceOptions.shareURL.trim())+'"'}else if(isPreview){var parsedUrl=CloudflareApps.proxy.originalURL.parsed
shareUrlAttr=' data-a2a-url="'+escapeAttr(parsedUrl.scheme+'://'+parsedUrl.host+parsedUrl.path)+'"'}
var shareTitleAttr=''
if(instanceOptions.shareTitle){shareTitleAttr=' data-a2a-title="'+escapeAttr(instanceOptions.shareTitle.trim())+'"'}
var buttonsHTML=''
instanceOptions.services.forEach(function(service){var serviceCode=''
serviceCode=service.serviceCode==='__other'?service.serviceCodeOther:service.serviceCode
serviceCode=serviceCode.trim().toLowerCase()
var serviceCounter=service.serviceCounter?' a2a_counter':''
if(serviceCode==='addtoany'){buttonsHTML+='<a class="a2a_dd'+serviceCounter+'"></a>'}else{buttonsHTML+='<a class="a2a_button_'+serviceCode+serviceCounter+'"></a>'}})
var styleAttr=''
var html=''
if(isFloating){var verticalCentering='top:50%;transform:translateY(-50%);'
var mobileHideClass=vertical.hideOnMobile?' mobileHide':''
styleAttr=' style="'
if(verticalPlacement==='left'){styleAttr+='left:0px;'+verticalCentering}else if(verticalPlacement==='right'){styleAttr+='right:0px;'+verticalCentering}
styleAttr+='"'
if(verticalPlacement!=='none'){html+='<div class="a2a_kit a2a_kit_size_'+iconSize+' a2a_floating_style a2a_vertical_style'+mobileHideClass+'"'+iconColorAttr+shareUrlAttr+shareTitleAttr+styleAttr+'>'+buttonsHTML+'</div>'}
var horizontal=instanceOptions.floatingHorizontal
var horizontalPlacement=horizontal.placement
var horizontalBottom='bottom:0px;'
var desktopHideClass=horizontal.hideOnDesktop?' desktopHide':''
styleAttr=' style="'
if(horizontalPlacement==='left'){styleAttr+=horizontalBottom+'left:0;'}else if(horizontalPlacement==='right'){styleAttr+=horizontalBottom+'right:0;'}
styleAttr+='"'
if(horizontalPlacement!=='none'){html+='<div class="a2a_kit a2a_kit_size_'+iconSize+' a2a_floating_style a2a_default_style'+desktopHideClass+'"'+iconColorAttr+shareUrlAttr+shareTitleAttr+styleAttr+'>'+buttonsHTML+'</div>'}}else{html+='<div class="a2a_kit a2a_kit_size_'+iconSize+' a2a_default_style"'+iconColorAttr+shareUrlAttr+shareTitleAttr+styleAttr+'>'+buttonsHTML+'</div>'}
element.innerHTML=html})
injectStyles(css)
if(window.a2a)window.a2a.init_all('page')
if(isPreview&&previewElements.length===1&&previewElements[0].getAttribute('type')==='inline'){previewElements[0].scrollIntoView()}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElements)}else{updateElements()}
window.CloudflareApps.installs['8jP1AVipo9vK'].scope={setOptions:function setOptions(nextOptions){previewElements.forEach(function(element){CloudflareApps.createElement(null,element)})
options=nextOptions
updateElements()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['DJtEmarQKFIS'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['DJtEmarQKFIS'].options
var elements={}
var prevElements={}
function updateElements(){options.blocks.reverse().forEach(function(block,index){var locationHash=[block.location.selector,block.location.method,index].join('!')
var element
if(elements[locationHash]){element=elements[locationHash]}else{if(block.location.method==='replace'){prevElements[locationHash]=document.querySelector(block.location.selector)}
element=CloudflareApps.createElement(block.location)
elements[locationHash]=element}
element.setAttribute('app','add-content')
element.foundInBlocks=true
element.innerHTML=''
var contentWrapper=document.createElement('content-wrapper')
contentWrapper.innerHTML=block.content
element.appendChild(contentWrapper)})
for(var hash in elements){if(!elements[hash].foundInBlocks){if(prevElements[hash]){elements[hash].parentNode.replaceChild(prevElements[hash],elements[hash])
delete prevElements[hash]}else{elements[hash].parentNode.removeChild(elements[hash])}
delete elements[hash]}else{delete elements[hash].foundInBlocks}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElements)}else{updateElements()}
window.CloudflareApps.installs['DJtEmarQKFIS'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['r5NWRMs8PO4k'].URLPatterns)){(function(){var options=CloudflareApps.installs['r5NWRMs8PO4k'].options
var style=document.createElement('style')
document.head.appendChild(style)
function updateStyle(){style.innerHTML=options.css}
updateStyle()
window.CloudflareApps.installs['r5NWRMs8PO4k'].scope={setOptions:function(nextOptions){options=nextOptions
updateStyle()}}})()};if(CloudflareApps.matchPage(CloudflareApps.installs['rg9agSxarYEA'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])
return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0);})
([function(module,exports,__webpack_require__){module.exports=__webpack_require__(1);},function(module,exports,__webpack_require__){var cssPath=__webpack_require__(2);var asConstants=__webpack_require__(3);var storageAvailable=__webpack_require__(4);var lStorage=__webpack_require__(5);var getLocationParam=function(){return window.location.pathname;}
var shouldBackup=function(formElement){if(asConstants.excludedTypes.indexOf(formElement.type)!==-1){return false;}
for(var i=0;i<asConstants.regExps.length;i++){if(asConstants.regExps[i].test(formElement.name)){return false;}}
return true;}
var formBackedUp=[];var FormBackup=function(formElement){this.backupObject={};this.formElement=formElement;this.formPath=cssPath(formElement);formBackedUp.push(this.formPath);};FormBackup.prototype.setElemValue=function(elem,value){if(!elem.name){return false;}
this.backupObject[elem.name]=value;this.save();};FormBackup.prototype.save=function(){lStorage.setJSON(getLocationParam()+this.formPath,this.backupObject);}
FormBackup.prototype.restore=function(){var formParams=lStorage.getJSON(getLocationParam()+this.formPath);this.backupObject=formParams;for(var fieldName in formParams){var formValue=formParams[fieldName];var elem=document.getElementsByName(fieldName)[0];if(!elem.value){elem.value=formParams[fieldName];}}}
FormBackup.prototype.attachSubmitListener=function(){var me=this;this.formElement.addEventListener("submit",function(e){lStorage.clear(getLocationParam()+me.formPath);})}
FormBackup.prototype.attachInputListeners=function(){var formFields=document.querySelectorAll(this.formPath+' input,textarea');var formFieldsArr=[].slice.call(formFields);var me=this;formFieldsArr.forEach(function(field){if(!shouldBackup(field)){return;}
field.addEventListener("input",function(e){me.setElemValue(this,e.target.value);});});}
var bootstrap=function(){if(!storageAvailable("localStorage")){return false;}
var timerLength=100;var setFormBackup=function(){setTimeout(function(){for(var i=0;i<document.forms.length;i++){if(formBackedUp.indexOf(cssPath(document.forms[i]))!==-1){return false;};var formBackup=new FormBackup(document.forms[i]);formBackup.restore();formBackup.attachSubmitListener();formBackup.attachInputListeners();};timerLength*=2;setFormBackup();},timerLength);}
setFormBackup();};document.addEventListener("DOMContentLoaded",function(event){bootstrap();});if(document.readyState==="complete"){bootstrap();}},function(module,exports){var UTILS={};UTILS.cssPath=function(node,optimized)
{if(node.nodeType!==Node.ELEMENT_NODE)
return"";var steps=[];var contextNode=node;while(contextNode){var step=UTILS._cssPathStep(contextNode,!!optimized,contextNode===node);if(!step)
break;steps.push(step);if(step.optimized)
break;contextNode=contextNode.parentNode;}
steps.reverse();return steps.join(" > ");}
UTILS._cssPathStep=function(node,optimized,isTargetNode)
{if(node.nodeType!==Node.ELEMENT_NODE)
return null;var id=node.getAttribute("id");if(optimized){if(id)
return new UTILS.DOMNodePathStep(idSelector(id),true);var nodeNameLower=node.nodeName.toLowerCase();if(nodeNameLower==="body"||nodeNameLower==="head"||nodeNameLower==="html")
return new UTILS.DOMNodePathStep(node.nodeName.toLowerCase(),true);}
var nodeName=node.nodeName.toLowerCase();if(id)
return new UTILS.DOMNodePathStep(nodeName.toLowerCase()+idSelector(id),true);var parent=node.parentNode;if(!parent||parent.nodeType===Node.DOCUMENT_NODE)
return new UTILS.DOMNodePathStep(nodeName.toLowerCase(),true);function prefixedElementClassNames(node)
{var classAttribute=node.getAttribute("class");if(!classAttribute)
return[];return classAttribute.split(/\s+/g).filter(Boolean).map(function(name){return"$"+name;});}
function idSelector(id)
{return"#"+escapeIdentifierIfNeeded(id);}
function escapeIdentifierIfNeeded(ident)
{if(isCSSIdentifier(ident))
return ident;var shouldEscapeFirst=/^(?:[0-9]|-[0-9-]?)/.test(ident);var lastIndex=ident.length-1;return ident.replace(/./g,function(c,i){return((shouldEscapeFirst&&i===0)||!isCSSIdentChar(c))?escapeAsciiChar(c,i===lastIndex):c;});}
function escapeAsciiChar(c,isLast)
{return"\\"+toHexByte(c)+(isLast?"":" ");}
function toHexByte(c)
{var hexByte=c.charCodeAt(0).toString(16);if(hexByte.length===1)
hexByte="0"+hexByte;return hexByte;}
function isCSSIdentChar(c)
{if(/[a-zA-Z0-9_-]/.test(c))
return true;return c.charCodeAt(0)>=0xA0;}
function isCSSIdentifier(value)
{return/^-?[a-zA-Z_][a-zA-Z0-9_-]*$/.test(value);}
var prefixedOwnClassNamesArray=prefixedElementClassNames(node);var needsClassNames=false;var needsNthChild=false;var ownIndex=-1;var siblings=parent.children;for(var i=0;(ownIndex===-1||!needsNthChild)&&i<siblings.length;++i){var sibling=siblings[i];if(sibling===node){ownIndex=i;continue;}
if(needsNthChild)
continue;if(sibling.nodeName.toLowerCase()!==nodeName.toLowerCase())
continue;needsClassNames=true;var ownClassNames=prefixedOwnClassNamesArray;var ownClassNameCount=0;for(var name in ownClassNames)
++ownClassNameCount;if(ownClassNameCount===0){needsNthChild=true;continue;}
var siblingClassNamesArray=prefixedElementClassNames(sibling);for(var j=0;j<siblingClassNamesArray.length;++j){var siblingClass=siblingClassNamesArray[j];if(ownClassNames.indexOf(siblingClass))
continue;delete ownClassNames[siblingClass];if(!--ownClassNameCount){needsNthChild=true;break;}}}
var result=nodeName.toLowerCase();if(isTargetNode&&nodeName.toLowerCase()==="input"&&node.getAttribute("type")&&!node.getAttribute("id")&&!node.getAttribute("class"))
result+="[type=\""+node.getAttribute("type")+"\"]";if(needsNthChild){result+=":nth-child("+(ownIndex+1)+")";}else if(needsClassNames){for(var prefixedName in prefixedOwnClassNamesArray)
result+="."+escapeIdentifierIfNeeded(prefixedOwnClassNamesArray[prefixedName].substr(1));}
return new UTILS.DOMNodePathStep(result,false);}
UTILS.DOMNodePathStep=function(value,optimized)
{this.value=value;this.optimized=optimized||false;}
UTILS.DOMNodePathStep.prototype={toString:function()
{return this.value;}}
module.exports=UTILS.cssPath;},function(module,exports){var CC_NUM=/^((card|cc|acct).?(number|#|no|num)|nummer|credito|numero|número|numéro|カード番号|Номер.*карты|信用卡号|信用卡号码|信用卡卡號|카드)$/;var CC_CVV=/^(verification|card identification|security code|card code|cvn|cvv|cvc|csc|cvd|cid|ccv)$/;var CC_MON=/^(expir|exp.*mo|exp.*date|ccmonth|cardmonth|gueltig|gültig|monat|fecha|date.*exp|scadenza|有効期限|validade|Срок действия карты|月)$/;var CC_YEAR=/^(exp.?year|ablaufdatum|gueltig|gültig|yahr|fecha|scadenza|有効期限|validade|Срок действия карты|年|有效期)$/;var regExps=[CC_NUM,CC_CVV,CC_MON,CC_YEAR];var excludedTypes=["hidden","password","file","submit","reset","button","checkbox","radio"];module.exports={regExps,excludedTypes}},function(module,exports){module.exports=function storageAvailable(type){try{var storage=window[type],x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);return true;}
catch(e){return false;}}},function(module,exports){var lStorage={getJSON:function(key,placeholder){var value=localStorage.getItem(key);if(value){try{return JSON.parse(value);}catch(e){}}
return placeholder||{};},setJSON:function(key,value){localStorage.setItem(key,JSON.stringify(value))},clear:function(key){localStorage.removeItem(key);}}
module.exports=lStorage;}]);};if(CloudflareApps.matchPage(CloudflareApps.installs['tkwId5XUioM2'].URLPatterns)){(function(){'use strict'
if(!window.addEventListener)return
var options=CloudflareApps.installs['tkwId5XUioM2'].options
var element
var BUTTON_WIDTH=56
var BUTTON_HEIGHT=35
var resizeHandler
function updateElement(){window.removeEventListener('resize',resizeHandler)
element=CloudflareApps.createElement(options.location,element)
element.setAttribute('app','emoji-react')
element.setAttribute('data-position',options.position)
var emojis=options.emojis.map(emoji=>`:${emoji.value}:`)
var location="tkwId5XUioM2"==='preview'?CloudflareApps.proxy.originalURL.raw:window.location.href
var url=location.replace(/(http:\/\/|https:\/\/)/gi,'').replace(/^\/|\/$/g,'')
var iframe=document.createElement('iframe')
iframe.src='https://emojireact.com/embed?emojis='+emojis.join(',')+'&url='+url
iframe.scrolling='no'
iframe.frameBorder='0'
iframe.style.width=BUTTON_WIDTH*emojis.length+'px'
function computeHeight(){var computed=window.getComputedStyle(iframe)
var computedWidth=parseInt(computed.width,10)
iframe.style.height=BUTTON_HEIGHT*Math.ceil(emojis.length/(computedWidth/BUTTON_WIDTH))+'px'}
resizeHandler=computeHeight
iframe.onload=resizeHandler
window.addEventListener('resize',resizeHandler)
element.appendChild(iframe)}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElement)}else{updateElement()}
window.CloudflareApps.installs['tkwId5XUioM2'].scope={setOptions:function(nextOptions){options=nextOptions
updateElement()},setPosition:function(nextOptions){options=nextOptions
element.setAttribute('data-position',options.position)}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['3w7bSSvyIe_2'].URLPatterns)){(function(){var options=CloudflareApps.installs['3w7bSSvyIe_2'].options;var id;if(options.account&&options.organization){id=options["web-properties-for-"+options.organization];}else{id=(options.id||"").trim();}
if(!id){console.log("Cloudflare Google Analytics: Disabled. UA-ID not present.");return;}else if("3w7bSSvyIe_2"==="preview"){console.log("Cloudflare Google Analytics: Enabled",id);}
function resolveParameter(uri,parameter){if(uri){var parameters=uri.split("#")[0].match(/[^?=&]+=([^&]*)?/g);for(var i=0,chunk;(chunk=parameters[i]);++i){if(chunk.indexOf(parameter)===0){return unescape(chunk.split("=")[1]);}}}}
window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}
gtag("js",new Date());gtag("config",id);gtag("set",{anonymizeIp:options.anonymizeIp});var vendorScript=document.createElement("script");vendorScript.src="https://www.googletagmanager.com/gtag/js?id="+id;document.head.appendChild(vendorScript);if(options.social){window.addEventListener("load",function googleAnalyticsSocialTracking(){var FB=window.FB;var twttr=window.twttr;if("FB"in window&&"Event"in FB&&"subscribe"in window.FB.Event){FB.Event.subscribe("edge.create",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"like",content_id:targetUrl});});FB.Event.subscribe("edge.remove",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"unlike",content_id:targetUrl});});FB.Event.subscribe("message.send",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"send",content_id:targetUrl});});}
if("twttr"in window&&"events"in twttr&&"bind"in twttr.events){twttr.events.bind("tweet",function(event){if(event){var targetUrl;if(event.target&&event.target.nodeName==="IFRAME"){targetUrl=resolveParameter(event.target.src,"url");}
gtag("event","share",{method:"twitter",event_action:"tweet",content_id:targetUrl});}});}},false);}})();};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwPSJhZGR0b2FueSJdIHsKICBkaXNwbGF5OiBibG9jazsKICBtYXJnaW46IC41ZW0gLjJlbTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJhZGR0b2FueSJdW2RhdGEtYWxpZ249ImNlbnRlciJdIC5hMmFfZGVmYXVsdF9zdHlsZSB7CiAgZGlzcGxheTogZmxleDsKICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKfQpjbG91ZGZsYXJlLWFwcFthcHA9ImFkZHRvYW55Il1bZGF0YS1hbGlnbj0ibGVmdCJdIC5hMmFfZGVmYXVsdF9zdHlsZSB7CiAgZGlzcGxheTogZmxleDsKICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7Cn0KY2xvdWRmbGFyZS1hcHBbYXBwPSJhZGR0b2FueSJdW2RhdGEtYWxpZ249InJpZ2h0Il0gLmEyYV9kZWZhdWx0X3N0eWxlIHsKICBkaXNwbGF5OiBmbGV4OwogIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7Cn0KCi8qIE92ZXJyaWRlIGRlZmF1bHQgOmhvdmVyIGVmZmVjdCAqLwpjbG91ZGZsYXJlLWFwcFthcHA9ImFkZHRvYW55Il0gLmEyYV9raXQgYTpob3ZlciAuYTJhX3N2ZyB7CiAgb3BhY2l0eTogMTsKfQpjbG91ZGZsYXJlLWFwcFthcHA9ImFkZHRvYW55Il0gLmEyYV9raXQgYTpob3ZlciAuYTJhX3N2ZyBzdmcgewogIG9wYWNpdHk6IC44Owp9CgovKiBGbG9hdGluZyBzdHlsZXMgKi8KLyogRGVmYXVsdCB0byBjZW50ZXJpbmcgdGhlIGhvcml6b250YWwgYmFyLCB3aXRob3V0IHRoZSBwcmVtYXR1cmUgd3JhcHBpbmcgb2YgdHJhbnNmb3JtL3RyYW5zbGF0ZVkgKi8KY2xvdWRmbGFyZS1hcHBbYXBwPSJhZGR0b2FueSJdW3R5cGU9ImZsb2F0aW5nIl0gewogIGRpc3BsYXk6IGZsZXg7CiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Cn0KY2xvdWRmbGFyZS1hcHBbYXBwPSJhZGR0b2FueSJdIC5hMmFfZmxvYXRpbmdfc3R5bGUgewogIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OwogIHBhZGRpbmc6IDA7Cn0KLyogQWRqdXN0IGZsb2F0aW5nIHR5cGUncyBsaW5rIHBhZGRpbmcgd2l0aCBoaWdoIHNwZWNpZmljaXR5ICovCmNsb3VkZmxhcmUtYXBwW2FwcD0iYWRkdG9hbnkiXSAuYTJhX2Zsb2F0aW5nX3N0eWxlLmEyYV9raXQuYTJhX3ZlcnRpY2FsX3N0eWxlIGEgewogIHBhZGRpbmctbGVmdDogMDsKICBwYWRkaW5nLXJpZ2h0OiAwOwp9CmNsb3VkZmxhcmUtYXBwW2FwcD0iYWRkdG9hbnkiXSAuYTJhX2Zsb2F0aW5nX3N0eWxlLmEyYV9raXQuYTJhX2RlZmF1bHRfc3R5bGUgYSB7CiAgcGFkZGluZy10b3A6IDA7CiAgcGFkZGluZy1ib3R0b206IDA7Cn0KLyogRmxvYXRpbmcgcmVzcG9uc2l2ZW5lc3MgKi8KQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5ODBweCkgewogIGNsb3VkZmxhcmUtYXBwW2FwcD0iYWRkdG9hbnkiXSAuYTJhX2Zsb2F0aW5nX3N0eWxlLmEyYV92ZXJ0aWNhbF9zdHlsZS5tb2JpbGVIaWRlIHsgCiAgICBkaXNwbGF5OiBub25lOwogIH0KfQpAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk4MXB4KSB7CiAgY2xvdWRmbGFyZS1hcHBbYXBwPSJhZGR0b2FueSJdIC5hMmFfZmxvYXRpbmdfc3R5bGUuYTJhX2RlZmF1bHRfc3R5bGUuZGVza3RvcEhpZGUgewogICAgZGlzcGxheTogbm9uZTsKICB9Cn1jbG91ZGZsYXJlLWFwcFthcHA9InJpY2gtdGV4dCJdIHsKICBkaXNwbGF5OiBibG9jazsKICBkaXNwbGF5OiBmbGV4Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9InJpY2gtdGV4dCJdIGNvbnRlbnQtd3JhcHBlciB7CiAgZGlzcGxheTogYmxvY2s7CiAgd2lkdGg6IDEwMCU7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0icmljaC10ZXh0Il1bZGF0YS1ob3Jpem9udGFsLWFsaWdubWVudD0ibGVmdCJdIHsKICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0icmljaC10ZXh0Il1bZGF0YS1ob3Jpem9udGFsLWFsaWdubWVudD0iY2VudGVyIl0gewogIGp1c3RpZnktY29udGVudDogY2VudGVyOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9InJpY2gtdGV4dCJdW2RhdGEtaG9yaXpvbnRhbC1hbGlnbm1lbnQ9InJpZ2h0Il0gewogIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7Cn0KLyogU2V0IHRoZSBhcHAgYXR0cmlidXRlIHRvIHlvdXIgYXBwJ3MgZGFzaC1kZWxpbWl0ZWQgYWxpYXMuICovCmNsb3VkZmxhcmUtYXBwW2FwcD0iZW1vamktcmVhY3QiXSB7CiAgZGlzcGxheTogZmxleDsKICBtYXJnaW46IDFlbSAyZW07Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iZW1vamktcmVhY3QiXSA+IGlmcmFtZSB7CiAgZmxleDogMCAwIGF1dG87CiAgYm9yZGVyOiBub25lOwogIG92ZXJmbG93OiBoaWRkZW47CiAgaGVpZ2h0OiAzNXB4OwogIHBvc2l0aW9uOiByZWxhdGl2ZTsKICB6LWluZGV4OiAyOwogIG1heC13aWR0aDogMTAwJTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJlbW9qaS1yZWFjdCJdW2RhdGEtcG9zaXRpb249ImxlZnQiXSB7CiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImVtb2ppLXJlYWN0Il1bZGF0YS1wb3NpdGlvbj0iY2VudGVyIl0gewogIGp1c3RpZnktY29udGVudDogY2VudGVyOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImVtb2ppLXJlYWN0Il1bZGF0YS1wb3NpdGlvbj0icmlnaHQiXSB7CiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsKfQo=';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/xjuzJXNFSwWU1kOU62bO7Y0btWE.js';document.head.appendChild(script);})();