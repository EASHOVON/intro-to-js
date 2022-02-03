var pcBuild = {
    processor: "INTEL CORE I9-10900K 10TH GEN 10 CORE PROCESSOR",
    motherboard: "ASRock Z490 Extreme4 10th Gen DDR4 Motherboard",
    ram: "Team Delta RGB 16GB DDR4 3200MHz Desktop RAM",
    graphicsCard: "Gigabyte GeForce RTX 3090",
    storage: "1TB SATA SSD",
    price: 300680
}

var pcProcessor = pcBuild.processor;
console.log(pcProcessor);

var pcProcessor = pcBuild["processor"]
console.log(pcProcessor);

var processor = "processor";
pcBuild[processor] = "Core i5 8th Gen";

pcBuild.ram = "64GB";
pcBuild["storage"] = "2TB";

console.log(pcBuild);