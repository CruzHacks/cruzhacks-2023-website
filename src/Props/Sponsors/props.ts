import React from "react"

/* eslint-disable */
import { ReactComponent as Lightship } from "../../assets/sponsors/Lightship.svg"
import { ReactComponent as EigthWall } from "../../assets/sponsors/8thWall.svg"
import { ReactComponent as BaskinEng } from "../../assets/sponsors/BaskinEngineering.svg"
import { ReactComponent as SantaCruzWorks } from "../../assets/sponsors/SantaCruzWorks.svg"
import { ReactComponent as SUA } from "../../assets/sponsors/SUA.svg"
import { ReactComponent as CIED } from "../../assets/sponsors/CIED.svg"
import { ReactComponent as Backbone } from "../../assets/sponsors/Backbone.svg"
import { ReactComponent as Woodstock } from "../../assets/sponsors/Woodstock.svg"
import { ReactComponent as ChooseSC } from "../../assets/sponsors/ChooseSC.svg"
import { ReactComponent as SouthSwell } from "../../assets/sponsors/SouthSwell.svg"
import { ReactComponent as Citris } from "../../assets/sponsors/Citris.svg"
import { ReactComponent as StandOutStickers } from "../../assets/sponsors/StandOutStickers.svg"
import { ReactComponent as MLH } from "../../assets/sponsors/mlh.svg"
import { ReactComponent as StickerMule } from "../../assets/sponsors/StickerMule.svg"
import { ReactComponent as Wolfram } from "../../assets/sponsors/Wolfram.svg"
import { ReactComponent as Balsamiq } from "../../assets/sponsors/Balsamiq.svg"
import { ReactComponent as PCC } from "../../assets/sponsors/PCC.svg"
import { ReactComponent as Echo } from "../../assets/sponsors/echo3D.svg"
import { ReactComponent as Verbwire } from "../../assets/sponsors/VerbwireBlack.svg"
/* eslint-enable */

interface SponsorsProps {
  link: string
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
  alt: string
}

export const SponsorsIconsLinks: Array<Array<SponsorsProps>> = [
  [
    {
      link: "http://lightship.dev/",
      icon: Lightship,
      alt: "Niantic Lightship",
    },
    {
      link: "https://www.8thwall.com/",
      icon: EigthWall,
      alt: "Niantic 8th Wall",
    },
  ],
  [
    {
      link: "https://engineering.ucsc.edu/",
      icon: BaskinEng,
      alt: "Baskin Engineering",
    },
    {
      link: "https://www.santacruzworks.org/",
      icon: SantaCruzWorks,
      alt: "SantaCruzWorks",
    },
    {
      link: "https://sua.ucsc.edu/",
      icon: SUA,
      alt: "Student Union Assembly",
    },
  ],
  [
    {
      link: "https://cied.ucsc.edu/",
      icon: CIED,
      alt: "CIED",
    },
    {
      link: "https://playbackbone.com/",
      icon: Backbone,
      alt: "Backbone",
    },
    {
      link: "https://woodstockscruz.com/",
      icon: Woodstock,
      alt: "Woodstock's Pizza",
    },
  ],
  [
    {
      link: "https://www.choosesantacruz.com/",
      icon: ChooseSC,
      alt: "Choose Santa Cruz",
    },
    {
      link: "https://www.linkedin.com/in/bud-colligan-1793022/",
      icon: SouthSwell,
      alt: "South Swell Ventures",
    },
    {
      link: "https://citris.sites.ucsc.edu/",
      icon: Citris,
      alt: "CITRIS and the Banatao Institute",
    },
  ],
  [
    {
      link: "https://hackp.ac/mlh-standoutstickers-hackathons",
      icon: StandOutStickers,
      alt: "StandOut Stickers",
    },
    {
      link: "https://mlh.io/",
      icon: MLH,
      alt: "MLH",
    },
    {
      link: "https://mule.to/p3fa",
      icon: StickerMule,
      alt: "StickerMule",
    },
    {
      link: "https://www.wolfram.com/",
      icon: Wolfram,
      alt: "Wolfram Language",
    },
    {
      link: "https://balsamiq.com/wireframes/",
      icon: Balsamiq,
      alt: "Balsamiq",
    },
    {
      link: "https://pacificcookie.com/",
      icon: PCC,
      alt: "Pacific Cookie Company",
    },
    {
      link: "https://www.echo3d.com/",
      icon: Echo,
      alt: "echo3D",
    },
    {
      link: "https://www.verbwire.com/",
      icon: Verbwire,
      alt: "Verbwire",
    },
  ],
]
