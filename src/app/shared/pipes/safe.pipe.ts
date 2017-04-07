import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
@Pipe({
	name: 'safe'
})
class SafePipe implements PipeTransform {
	constructor(protected dom: DomSanitizer) {}
	public transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
		switch (type) {
			case 'html':
				return this.dom.bypassSecurityTrustHtml(value);
			case 'style':
				return this.dom.bypassSecurityTrustStyle(value);
			case 'script':
				return this.dom.bypassSecurityTrustScript(value);
			case 'url':
				return this.dom.bypassSecurityTrustUrl(value);
			case 'resourceUrl':
				return this.dom.bypassSecurityTrustResourceUrl(value);
			default:
				return value;
		}
	}
};
// 暂时不需要的模块，很奇怪build的时候需要引入，否则报错
// export default SafePipe;
// 富文本的使用
// <div [innerHTML]="html | safe:'html'"></div>
