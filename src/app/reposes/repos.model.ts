export class Repos{
    constructor(
        public name:string,
        public description:string,
        public language:string,
        public has_issues: boolean,
        public html_url

    ){
        this.name = name;
        this.description = description;
        this.language = language;
        this.has_issues =has_issues;
        this.html_url = html_url
    }
}