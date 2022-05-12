class TextAnalizator {
    regex1 = RegExp(/\[(\/?(?:b|i|u|o|s|sup|sub|spoiler))\]/gms);
    regex2 = RegExp(/(?:\[(\/?(?:b|i|u|o|s|sup|sub|spoiler))\])|(?:<|>)/gms);
    replaceMap = new Map();

    constructor() {
        if (typeof TextAnalizator.instance === 'object') {
            return TextAnalizator.instance
        }

        this.replaceMap.set('[b]', '<strong>');
        this.replaceMap.set('[/b]', '</strong>');
        this.replaceMap.set('[i]', '<em>');
        this.replaceMap.set('[/i]', '</em>');
        this.replaceMap.set('[u]', '<span class="u">');
        this.replaceMap.set('[/u]', '</span>');
        this.replaceMap.set('[o]', '<span class="o">');
        this.replaceMap.set('[/o]', '</span>');
        this.replaceMap.set('[spoiler]', '<span class="spoiler">');
        this.replaceMap.set('[/spoiler]', '</span>');
        this.replaceMap.set('[s]', '<span class="s">');
        this.replaceMap.set('[/s]', '</span>');
        this.replaceMap.set('[sup]', '<sup>');
        this.replaceMap.set('[/sup]', '</sup>');
        this.replaceMap.set('[sub]', '<sub>');
        this.replaceMap.set('[/sub]', '</sub>');
        this.replaceMap.set('<', '&lt;');
        this.replaceMap.set('>', '&gt;');
        this.replaceMap.set('&', '&amp;')

        TextAnalizator.instance = this
        return TextAnalizator.instance
    }

    #tagsReplacer(text) {
        return text.replaceAll(this.regex1, (match) => this.replaceMap.get(match))
    }

    #tagsReplacerForTitle(text) {
        return text.replaceAll(this.regex2, "").slice(0, 51)
    }

    #brTag(text) {
        return text.replaceAll(/(?:\r\n|\n|\r)/g, "<br />")
    }

    #screening(text) {
        return text.replaceAll(/(?:<|>)/gms, (match) => this.replaceMap.get(match))
    }

    #unkfunc(text) {
        return text.replaceAll(/(?:\r\n|\n|\r)(>[^>].+)/g, (match, elem1, elem2) => `${elem1}<span class="unkfunc">${elem2}</span>`)
    }

    #postLinks(text) {
        let answers = []
        return {
            postLinkText: text.replaceAll(/(\s)*(?:&gt;&gt;)(\d{1,10})/g, (match, elem1, elem2) => {
                answers.push(elem2)
                console.log(match)
                return `${elem1 || ""}<a class="answer-reference" data-num="${elem2}">>>${elem2}</a>`
            }),
            answers: answers
        }
    }


    formedText(text) {
        let postTitle = this.#tagsReplacerForTitle(text)
        let formedText = this.#screening(text)
        formedText = this.#unkfunc(formedText)
        console.log(formedText)
        let {postLinkText, answers} = this.#postLinks(formedText)
        formedText = postLinkText
        formedText = this.#tagsReplacer(formedText)
        formedText = this.#brTag(formedText)
        return {formedText: formedText, answers: answers, postTitle: postTitle}
    }
}

export default new TextAnalizator()