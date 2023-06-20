class SVG {
    constructor() {
        this.textComponent = ""
        this.shapeComponent = ""
    }
    setShape(instanceOfShape) {
        this.shapeComponent = instanceOfShape.render()
    }
    setText(text, textColor) {
        if (text.lenght > 3) {
            throw new Error("Please enter LOGO text <=3")
        }
        this.textComponent = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor} ">${text}</text>
`
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.shapeComponent}
    ${this.textComponent}
      </svg>`
    }
}