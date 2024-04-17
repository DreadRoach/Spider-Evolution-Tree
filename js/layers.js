addLayer("b", {
    name: "Bytes", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFFFF",
    requires: new Decimal(8), // Can be a function that takes requirement increases into account
    resource: "bytes", // Name of prestige currency
    baseResource: "bits", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    infoboxes: {
    intro: {
        title: "Hello, world!",
        body() {return "You are a brand new piece of software designed to automate the production of computer code. Your creator has endowed you with the latest in digital hardware: an 8-bit microprocessor (!) and an entire kilobyte's worth of internal storage. Your duty is to prove that you can generate code with enough competency to match or exceed a human programmer. Good luck!" }
    }
    },
    layerShown(){return true}
})
