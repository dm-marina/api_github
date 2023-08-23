export class Repos{
    constructor(
        public id:number,
        public name:string,
        public description:string,
        public language:string,
        public has_issues: boolean,
        public html_url

    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.language = language;
        this.has_issues =has_issues;
        this.html_url = html_url
    }
}