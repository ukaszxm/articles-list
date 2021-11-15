class TagModel {
    public value: string;

    public label: string;

    constructor(tag: string) {
        this.value = tag;
        this.label = tag;
    }
}

export default TagModel;
