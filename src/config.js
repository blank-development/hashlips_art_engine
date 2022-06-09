const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Near family member";
const description = "Near family tree";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 15,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "openedEyes" },
      { name: "bandage" },
      { name: "tshirt" },
      { name: "moustaches" },
      { name: "noses" },
      { name: "glasses" },
      { name: "haircut" },
      { name: "hats" },
      { name: "mouth" },
      { name: "misc" },
      { name: "stickers" },
    ],
  },
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "closedEyes" },
      { name: "bandage" },
      { name: "tshirt" },
      { name: "noses" },
      { name: "glasses" },
      { name: "haircut" },
      { name: "mouth" },
      { name: "misc" },
    ],
  },
  {
    growEditionSizeTo: 25,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "eyebrows" },
      { name: "eyes" },
      { name: "bandage" },
      { name: "tshirt" },
      { name: "noses" },
      { name: "glasses" },
      { name: "haircut" },
      { name: "hats" },
      { name: "mouth" },
      { name: "stickers" },
    ],
  },
  {
    growEditionSizeTo: 31,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "face" },
      { name: "eyebrows" },
      { name: "eyes" },
      { name: "face" },
      { name: "tshirt" },
      { name: "moustaches" },
      { name: "noses" },
      { name: "glasses" },
      { name: "haircut" },
      { name: "hats" },
      { name: "mouth" },
      { name: "stickers" },
    ],
  },
  {
    growEditionSizeTo: 37,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "face" },
      { name: "eyebrows" },
      { name: "eyes" },
      { name: "face" },
      { name: "tshirt" },
      { name: "noses" },
      { name: "glasses" },
      { name: "haircut" },
      { name: "hats" },
      { name: "mouth" },
      { name: "stickers" },
    ],
  },
  {
    growEditionSizeTo: 77,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "openedEyes" },
      { name: "tshirt" },
      { name: "noses" },
      { name: "haircut" },
      { name: "hats" },
      { name: "mouth" },
      { name: "stickers" },
    ],
  },
  {
    growEditionSizeTo: 97,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "openedEyes" },
      { name: "tshirt" },
      { name: "noses" },
      { name: "haircut" },
      { name: "mouth" },
      { name: "misc" },
    ],
  },
  {
    growEditionSizeTo: 132,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "closedEyes" },
      { name: "tshirt" },
      { name: "noses" },
      { name: "haircut" },
      { name: "hats" },
      { name: "mouth" },
    ],
  },
  {
    growEditionSizeTo: 167,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "closedEyes" },
      { name: "tshirt" },
      { name: "noses" },
      { name: "haircut" },
      { name: "mouth" },
      { name: "stickers" },
      { name: "misc" },
    ],
  },
  {
    growEditionSizeTo: 202,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "closedEyes" },
      { name: "tshirt" },
      { name: "noses" },
      { name: "haircut" },
      { name: "mouth" },
      { name: "stickers" },
      { name: "misc" },
    ],
  },
  {
    growEditionSizeTo: 322,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "eyebrows" },
      { name: "eyes" },
      { name: "tshirt" },
      { name: "moustaches" },
      { name: "noses" },
      { name: "haircut" },
      { name: "mouth" },
    ],
  },
  {
    growEditionSizeTo: 372,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "eyebrows" },
      { name: "eyes" },
      { name: "tshirt" },
      { name: "moustaches" },
      { name: "noses" },
      { name: "glasses" },
      { name: "haircut" },
      { name: "mouth" },
      { name: "misc" },
    ],
  },
  {
    growEditionSizeTo: 415,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "eyebrows" },
      { name: "eyes" },
      { name: "tshirt" },
      { name: "moustaches" },
      { name: "noses" },
      { name: "glasses" },
      { name: "haircut" },
      { name: "hats" },
      { name: "mouth" },
      { name: "stickers" },
    ],
  },
  {
    growEditionSizeTo: 435,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "eyebrows" },
      { name: "eyes" },
      { name: "tshirt" },
      { name: "moustaches" },
      { name: "noses" },
      { name: "glasses" },
      { name: "haircut" },
      { name: "mouth" },
      { name: "misc" },
    ],
  },
  {
    growEditionSizeTo: 440,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "eyebrows" },
      { name: "eyes" },
      { name: "tshirt" },
      { name: "moustaches" },
      { name: "noses" },
      { name: "haircut" },
      { name: "mouth" },
      { name: "misc" },
    ],
  },
  {
    growEditionSizeTo: 481,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "eyebrows" },
      { name: "eyes" },
      { name: "tshirt" },
      { name: "moustaches" },
      { name: "noses" },
      { name: "haircut" },
      { name: "mouth" },
    ],
  },
  {
    growEditionSizeTo: 500,
    layersOrder: [
      { name: "background" },
      { name: "head" },
      { name: "eyebrows" },
      { name: "eyes" },
      { name: "tshirt" },
      { name: "noses" },
      { name: "haircut" },
      { name: "mouth" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2000,
  height: 2500,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
