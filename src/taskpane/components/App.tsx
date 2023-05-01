import * as React from "react";
import { useLayoutEffect, useState } from "react";
import { initializeIcons } from "@uifabric/icons";
import { Link } from "office-ui-fabric-react/lib/Link";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { mergeStyleSets } from "@uifabric/styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faGlobe, faShoppingCart, faEnvelope, faMicrophone, faSearch, faPhotoVideo } from "@fortawesome/free-solid-svg-icons";

type WebsiteData = {
  name: string;
  url: string;
  icon: any;
};

type ButtonData = {
  name: string;
  websites: WebsiteData[];
};

const buttonsData: ButtonData[] = [
  {
    name: "🖼️高清大图",
    websites: [
      { name: "Pexels", url: "https://www.pexels.com/zh-cn/", icon: faCoffee },
      { name: "ISORepublic", url: "https://isorepublic.com/", icon: faCoffee },
      { name: "picjumbo", url: "https://picjumbo.com/", icon: faCoffee },
      { name: "Unsplash", url: "https://unsplash.com/", icon: faCoffee },
      { name: "Hippopx", url: "https://www.hippopx.com/zh", icon: faCoffee },
      { name: "StockSnap", url: "https://stocksnap.io/", icon: faCoffee },
    ],
  },
  {
    name: "🖼️高清视频",
    websites: [
      { name: "Videvo", url: "https://www.videvo.net/", icon: faCoffee },
      { name: "Mixkit", url: "https://mixkit.co/", icon: faCoffee },
      { name: "Coverr", url: "https://coverr.co/", icon: faCoffee },
      { name: "Ignitemotion", url: "https://www.ignitemotion.com/", icon: faCoffee },
    ],
  },
  {
    name: "🖼️地图下载",
    websites: [
      { name: "标准地图服务系统", url: "http://bzdt.ch.mnr.gov.cn/", icon: faCoffee },
      { name: "DataV.GeoAtlas地理小工具系列", url: "http://datav.aliyun.com/portal/school/atlas/area_selector", icon: faCoffee },
      { name: "NB Map", url: "https://www.nbcharts.com/map/map.php", icon: faCoffee },
    ],
  },
  {
    name: "🖼️免抠图片",
    websites: [
      { name: "觅元素", url: "https://www.51yuansu.com/", icon: faCoffee },
      { name: "StickPNG", url: "http://www.stickpng.com/", icon: faCoffee },
    ],
  },
  {
    name: "🖼️音频音效",
    websites: [
      { name: "淘声网", url: "https://www.tosound.com/", icon: faCoffee },
      { name: "爱给网", url: "https://www.aigei.com/sound/", icon: faCoffee },
      { name: "站长之家", url: "https://sc.chinaz.com/yinxiao/", icon: faCoffee },
      { name: "音乐搜索器", url: "https://music.liuzhijin.cn/", icon: faCoffee },
    ],
  },
  {
    name: "🖼️背景素材",
    websites: [
      { name: "多色梯度", url: "https://codioful.com/", icon: faCoffee },
      { name: "SVG背景1", url: "https://www.svgbackgrounds.com/", icon: faCoffee },
      { name: "SVG背景2", url: "https://fffuel.co/", icon: faCoffee },
      { name: "光谱丝带", url: "https://codepen.io/tsuhre/full/BYbjyg", icon: faCoffee },
      { name: "海量纹理", url: "https://www.transparenttextures.com/", icon: faCoffee },
      { name: "衍生波浪", url: "https://codepen.io/Yakudoo/full/rJjOJx/", icon: faCoffee },
      { name: "渐变流体", url: "http://colordodge.com/VertexOscillation/", icon: faCoffee },
      { name: "动态晶格", url: "http://matthew.wagerfield.com/flat-surface-shader/", icon: faCoffee },
      { name: "粒子发射", url: "https://wangyasai.github.io/Stars-Emmision/", icon: faCoffee },
      { name: "噪点渐变", url: "https://www.noiseandgradient.com", icon: faCoffee },
    ],
  },
  {
    name: "🖼️矢量图形",
    websites: [
      { name: "illlustrations", url: "https://illlustrations.co/", icon: faCoffee },
      { name: "Delesign", url: "https://delesign.com/free-designs/graphics/", icon: faCoffee },
      { name: "unDraw", url: "https://undraw.co/illustrations", icon: faCoffee },
    ],
  },
  {
    name: "🖼️字体网站",
    websites: [
      { name: "字体天下", url: "https://www.fonts.net.cn/", icon: faCoffee },
      { name: "字体识别", url: "https://www.qiuziti.com/", icon: faCoffee },
      { name: "100font.com", url: "https://www.100font.com/", icon: faCoffee },
    ],
  },
  {
    name: "🖼️图标素材",
    websites: [
      { name: "Iconstore", url: "https://iconstore.co/", icon: faCoffee },
    ],
  },
  {
    name: "🎨配色方案",
    websites: [
      { name: "Colorion", url: "https://www.colorion.co/", icon: faCoffee },
      { name: "优设配色导航", url: "https://hao.uisdc.com/color/", icon: faCoffee },
      { name: "ColorDrop", url: "https://colordrop.io/", icon: faCoffee },
    ],
  },
  {
    name: "🎨渐变配色",
    websites: [
      { name: "WebGradients", url: "https://webgradients.com/", icon: faCoffee },
      { name: "uiGradients", url: "https://uigradients.com", icon: faCoffee },
      { name: "Gradient", url: "https://gradient.shapefactory.co/", icon: faCoffee },
      { name: "优设渐变导航", url: "https://hao.uisdc.com/color/gradient/", icon: faCoffee },
      { name: "流体渐变", url: "https://products.ls.graphics/mesh-gradients/", icon: faCoffee },
    ],
  },
  {
    name: "🎨色号查询",
    websites: [
      { name: "传图识色", url: "https://www.qtccolor.com/secaiku", icon: faCoffee },
    ],
  },
  {
    name: "🎨设计灵感",
    websites: [
      { name: "Boss设计导航", url: "https://nav.bossdesign.cn", icon: faCoffee },
      { name: "花瓣", url: "https://huaban.com/discovery", icon: faCoffee },
      { name: "站酷", url: "https://www.zcool.com.cn/", icon: faCoffee },
      { name: "优设", url: "https://uiiiuiii.com/inspiration", icon: faCoffee },
    ],
  },
  { 
    name: "🎨️PPT模板",
    websites: [
      { name: "51PPT", url: "https://www.51pptmoban.com/ppt/", icon: faCoffee },
      { name: "OfficePLUS", url: "https://www.officeplus.cn/", icon: faCoffee },
      { name: "第一PPT", url: "https://www.1ppt.com/", icon: faCoffee },
    ],
  },
  {
    name: "🛠️抠除背景",
    websites: [
      { name: "片刻抠图", url: "https://www.pickwant.com/home", icon: faCoffee },
      { name: "创客贴", url: "https://www.chuangkit.com/koutu", icon: faCoffee },
      { name: "皮卡智能", url: "https://www.picup.shop/", icon: faCoffee },
    ],
  },
  {
    name: "🛠️艺术处理",
    websites: [
      { name: "Dimmy样机", url: "https://dimmy.club/", icon: faCoffee },
      { name: "Mockup样机", url: "https://mockup.photos/freebies", icon: faCoffee },
      { name: "故障风生成", url: "https://photomosh.com/", icon: faCoffee },
      { name: "艺术场景1", url: "https://funny.pho.to/zh/", icon: faCoffee },
      { name: "艺术场景2", url: "https://photofunia.com/cn/", icon: faCoffee },
    ],
  },
  {
    name: "🛠️图片放大",
    websites: [
      { name: "Bigjpg", url: "https://bigjpg.com/", icon: faCoffee },
    ],
  },
  {
    name: "🛠️蒙版生成",
    websites: [
      { name: "Duotone", url: "https://duotone.shapefactory.co", icon: faCoffee },
    ],
  },
  {
    name: "🛠️图片压缩",
    websites: [
      { name: "iLoveImg", url: "https://www.iloveimg.com/zh-cn/compress-image", icon: faCoffee },
      { name: "TinyPNG", url: "https://tinypng.com/", icon: faCoffee },
      { name: "批量压缩", url: "https://www.onlineimagetool.com/zh/", icon: faCoffee },
    ],
  },
  {
    name: "🛠️在线编辑",
    websites: [
      { name: "在线PS", url: "https://www.photopea.com/", icon: faCoffee },
    ],
  },
  {
    name: "🛠️格式转换",
    websites: [
      { name: "PDF派", url: "https://www.pdfpai.com/", icon: faCoffee },
      { name: "SmallPDF", url: "https://smallpdf.com/", icon: faCoffee },
      { name: "iLovePDF", url: "https://www.ilovepdf.com/zh-cn", icon: faCoffee },
      { name: "PDF24 Tools", url: "https://tools.pdf24.org/zh/", icon: faCoffee },
      { name: "图片文字识别", url: "https://web.baimiaoapp.com/", icon: faCoffee },
      { name: "二维码生成器", url: "https://cli.im/url", icon: faCoffee },
    ],
  },
  {
    name: "🛠️图表制作",
    websites: [
      { name: "图表魔方", url: "https://chartcube.alipay.com/", icon: faCoffee },
      { name: "三维饼图", url: "https://www.pslkzs.com/chart/pie.php", icon: faCoffee },
    ],
  },
  {
    name: "🛠️形状生成",
    websites: [
      { name: "波浪形状生成器", url: "https://getwaves.io/", icon: faCoffee },
      { name: "雪花形状生成器", url: "https://www.misha.studio/snowflaker/", icon: faCoffee },
      { name: "圆角形状生成器", url: "https://squircley.app/", icon: faCoffee },
      { name: "简单流体生成器", url: "https://www.blobmaker.app/", icon: faCoffee },
      { name: "Apple流体生成器", url: "https://fffuel.co/hhholographic/", icon: faCoffee },
    ],
  },
];

function App() {
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(activeButtonIndex === index ? -1 : index);
  };

  return (
    <div>
      {buttonsData.map((buttonData, index) => (
        <div key={index}>
          <button 
            onClick={() => handleButtonClick(index)}
          >
            {buttonData.name}
          </button>
          {activeButtonIndex === index && (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {buttonData.websites.map((website, websiteIndex) => (
                <a
                  key={websiteIndex}
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/*  <FontAwesomeIcon icon={website.icon} /> 注释掉，太难选图标了*/}
                  {" " + website.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;