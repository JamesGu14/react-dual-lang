import React, { Component } from 'react'
import LinePartners from '../components/partner/LinePartners.jsx'

export default class Partner extends Component {
  render() {
    return (
      <section className="trd-page-contents-wrapper">
        <br /><br /><br /><br />
        <div className="container">
          <div className="row">
            {/*  Page Contents  */}
            <div className="trd-page-contents">
              <div className="trd-blog-post-wrapper">

                <LinePartners partners={[
                  { 
                    key: 1,
                    image: '../../content/images/testimonials/netcash.png',
                    name: 'Metcash',
                    description: `Metcash Limited (ASX:MTS)是壹家澳大利亞公司，從事雜貨、
                    酒類及相關產品的批發分銷和營銷。產品涵蓋食品飲料、母嬰用品、營養保健及美顏個護四大品類、
                    近百種產品，同時，Metcash旗下多個自有品牌也將隨之進入中國消費者的視線。
                    所有商品的引進均以中國消費者慣有的生活習慣、消費偏好為依據，順應大環境對健康、潮流生活方式的渴求，
                    致力於提供兼具卓越品質及實惠價格的最優之選。`
                  },
                  { 
                    key: 2,
                    image: '../../content/images/testimonials/iga.png',
                    name: 'IGA',
                    description: `IGA（英語：Independent Grocers Alliance，意思為：獨立雜貨商聯盟）
                      是一個以特許經營方式營運的超級市場品牌，已在全球超過30多個國家設有5,000間零售店舖。
                      成立於1926年，集團總部位於美國芝加哥奧黑爾。`
                  },
                  {
                    key: 3,
                    image: '../../content/images/testimonials/arnotts.png',
                    name: 'Arnotts（雅樂思）',
                    description: `雅樂思成立於1865年，至今已有150多年的歷史。其主要產品為面包，豌豆，脆博餅。
                      多年來一直深受澳洲本地人士喜愛。 尤其是澳洲標誌性零食Tim Tam。`
                  }
                ]} />

                <LinePartners partners={[
                  { 
                    key: 4,
                    image: '../../content/images/testimonials/kitkat.png',
                    name: 'Kit-Kat（奇巧）',
                    description: `吉百利史威士股份有限公司（Cadbury Schweppes）是一家國際性公司，
                      集團公司總部位於英國倫敦，主要生產、推廣及分銷糖果（巧克力、糖制糖果、口香糖等）及飲料產品。
                      集團公司總部設在英國倫敦，目前全球雇員有55000名，產品遍布全球200多個國家。
                      吉百利公司是全球第一大糖果公司，第二大口香糖公司，第三大軟飲料公司，
                      也是唯一一家同時擁有巧克力、糖果及產口香糖品的公司。`
                  },
                  {
                    key: 5,
                    image: '../../content/images/testimonials/lindt.png',
                    name: 'Lindts（瑞士莲）',
                    description: `瑞士蓮史賓利公司始於1845年，史賓利父子在蘇黎世創立了自己的巧克力商店。
                      自那時起，公司經歷了不同的歷史時期，但企業家精神以及創作高品質巧克力的熱情從未褪去。
                      目前她已經被業界公認為極具創新力的高檔巧克力制造商，在世界100多個國家均有銷售，
                      在全球4大洲均設有銷售公司。`
                  },
                  {
                    key: 6,
                    image: '../../content/images/testimonials/nippys.png',
                    name: 'Nippys',
                    description: `Nippy企業時代經營優質飲料，廣受認可。
                      作為南澳洲的標誌企業之一，Nippy希望可以傳承70年的家族歷史，繼續南澳洲最知名的新鮮果汁廠的傳統。
                      我們的產品範圍包括優質新鮮橙汁、檸檬汁、橘汁、葡萄汁和橘柚汁，鮮榨果汁、調味乳飲料和瓶裝水。
                      Nippy是全澳唯一一家澳洲獨有的橫向橘類加工企業，從業務包含從種植到消費者桌上的成品。
                      農場生產，家族制作。`
                  }
                ]} />

                <LinePartners partners={[
                  { 
                    key: 7,
                    image: '../../content/images/testimonials/sanitarium.png',
                    name: 'Sanitarium（新康立）',
                    description: `1898年, 一家小店在澳大利亞墨爾本開業, 本著Sanitarium原義：
                      生活得更好的理念，新康利把良好的飲食和健康聯接了起來。早在1901年代, 
                      新康利已把健康食品店和素食小餐館的概念引入澳大利亞和新西蘭。多年來, 
                      她一直堅持且發揚始創者的理念通過更營養健康的膳食來營造更美好的生活，
                      並建立了生產優質健康和素食產品的良好聲譽，同時享受著消費者授予的這份強烈信任。
                      在研發中心，作為行業內的領軍者，新康利開發更新，更便捷和更健康的方法來滿足大家對健康和美味的需求。`
                  },
                  {
                    key: 8,
                    image: '../../content/images/testimonials/morning-fresh.png',
                    name: 'Morningfresh（洗涤生活用品）',
                    description: `Morning Fresh的品牌擁有者是世界注明的PZ Cussons（匹茲.卡森），一個超過200年的跨國企業。
                      PZ Cussons生產和銷售一些世界上最熟為人知的家居品牌，從Imprial Lwether到Cussons Baby（加信氏），
                      Morning Fresh到St. Tropez。主營五大類產品：個人護理，化妝美容，家庭護理，食物營養和電器類。在非洲、歐洲、
                      亞洲和北美洲雇傭了6500的員工。1980年Morning Fresh投放澳洲市場，連續30多年澳洲市場銷量第一。
                      作為澳洲洗潔精的第一品牌，幾乎無人不曉。`
                  },
                  {
                    key: 9,
                    image: '../../content/images/testimonials/kellogg.png',
                    name: 'Kelloggs（家乐氏）',
                    description: `Kellogg‘s （家樂氏） 公司為全球知名谷物早餐和零食制造商。其產品包括谷物早餐，
                      餅幹，烘烤點心，冷凍烘餅，餡餅殼，及冰淇筒。公司的品牌包括Kellogg's，Keebler，
                      Pop- Tarts，Eggo，Cheez-It，Nutri-Grain，Rice Krispies，Special K, 
                      Murray，Austin，Morningstar Farms，Famous Amos，Carr's，Plantation，
                      Ready Crust等。 截止到2013年，Kellogg已有107年歷史，在全球超過180個國家和地區銷售。`
                  }
                ]} />

                <LinePartners partners={[
                  { 
                    key: 10,
                    image: '../../content/images/testimonials/brita.png',
                    name: 'Brita（碧然德）',
                    description: `1898年, 一家小店在澳大利亞墨爾本開業, 本著Sanitarium原義：
                    生活得更好的理念，新康利把良好的飲食和健康聯接了起來。早在1901年代， 
                    新康利已把健康食品店和素食小餐館的概念引入澳大利亞和新西蘭。多年來，
                    她一直堅持且發揚始創者的理念通過更營養健康的膳食來營造更美好的生活，
                    並建立了生產優質健康和素食產品的良好聲譽，同時享受著消費者授予的這份強烈信任。
                    在研發中心，作為行業內的領軍者，新康利開發更新，更便捷和更健康的方法來滿足大家對健康和美味的需求。`
                  },
                  {
                    key: 11,
                    image: '../../content/images/testimonials/heinz.png',
                    name: 'Heinz（亨氏）',
                    description: `亨氏公司是在1869年由H.J.Heinz在美國賓夕法尼亞州夏普斯堡創立的，經過一百多年卓有成效的發展，
                      由當時的小農場成為世界最大的營養食品生產商之一。亨氏的產品有5700多種，除了人們熟知的嬰幼兒食品，
                      如嬰兒米粉、面條、佐餐泥、果汁、果汁泥零、嬰幼兒配方奶粉，還有番茄醬、調味品、沙司和冷凍食品等。
                      該公司的分支機構遍及全球200多個國家和地區。2012年2月，股神巴菲特及巴西資本投資公司3G看中亨氏集團的優異業績表現，
                      以總價280億美元收購亨氏集團，創下同類企業的收購最高紀錄。`
                  },
                  {
                    key: 12,
                    image: '../../content/images/testimonials/devondale.jpg',
                    name: 'Devondale（德运奶粉）',
                    description: `德運（Devondale），是澳大利亞Murray Goulburn乳業公司旗下的品牌。
                      Murray Goulburn公司成立於1950年，至今已超過4000個原奶供應商和股東，為澳大利亞最大的乳制品生產商，
                      是全球最大食品原料供應商之一，公司擁有三十多個系列，千余種產品。牛奶產量為35.1億升，
                      占澳大利亞牛奶生產總量的35%。澳大利亞MG乳業位於維多利亞省及塔斯馬尼亞，營業額超過40億美金，
                      乳品出口量占世界乳制品交易總量的9%，出口的國家超過100個。`
                  }
                ]} />

                <LinePartners partners={[
                  { 
                    key: 13,
                    image: '../../content/images/testimonials/a2m.png',
                    name: 'A2奶粉',
                    description: `2010年A2 集團同其聯營子公司A2乳制品澳大利亞公司合並。
                      以a2® Jalna Yoghourt 酸奶品牌，a2® 的產品線延伸到澳大利亞天然酸奶品類。
                      a2® 牛奶成為澳大利亞成長最快的牛奶品牌。 2012年 2升裝的a2®全脂牛奶成為澳大利亞零售乳類品
                      （SKU）的第一品牌（根據AC尼爾森市場監測數據），其中a2®鮮奶產品在新西蘭、澳大利亞、
                      新西蘭和歐洲英國口碑極好，非常暢銷，銷售業績奇跡般式成長。`
                  },
                  {
                    key: 14,
                    image: '../../content/images/testimonials/bellamy.png',
                    name: 'Bellamy’s（贝拉米）',
                    description: '貝拉米奶粉是全球三大有機奶粉品牌之一，同時也是澳洲第一有機嬰兒食品品牌，以最安全、最幹凈的奶粉著稱。'
                  },
                  {
                    key: 15,
                    image: '../../content/images/testimonials/karicare.png',
                    name: 'Karicare（可瑞康）',
                    description: `Karicare是全球母嬰營養專家Nutricia旗下著名嬰幼兒奶粉品牌。Karicare起源於1896年，
                      由Truby King博士開發的，他最早開發這個產品的動力是“幫助辛勞的媽媽，保護可愛的寶寶”。
                      經過百年發展，Karicare現已成為新西蘭和澳大利亞市場領導品牌，是新西蘭和澳大利亞媽媽們的首選品牌，
                      尤以Karicare金裝系列最受消費者青睞。`
                  }
                ]} />

                <LinePartners partners={[
                  { 
                    key: 16,
                    image: '../../content/images/testimonials/raffertys-garden.png',
                    name: 'Rafferty’s Garden',
                    description: `Rafferty\'s Garden是世界著名的嬰兒輔食品牌，創立於上個世紀90年代。
                      目前在澳大利亞和新西蘭建有多家生產工廠，產品在澳洲市場位居前列，並且遠銷歐美東南亞各國。
                      Rafferty's Garden是世界第二大專營”濕嬰兒食品”的公司，所謂”濕嬰兒食品”就是包裝好的現成嬰兒食物，
                      如各種口味的蔬菜泥了，水果泥，smooth，酸奶smoothy等等。基本上都是幾種口味混合的，因為Rafferty's 
                      Garden的理念是營養豐富，低脂，新鮮和天然。藍莓、香蕉、蘋果口味果泥是用澳洲當地產的綠色優質水果加工而成。
                      加工工藝采用現代領先的技術，並且執行非常嚴格的衛生標準。因此，Rafferty's Garden是非常優質、安全、營養豐富的產品。`
                  },
                  {
                    key: 17,
                    image: '../../content/images/testimonials/huggies.png',
                    name: 'Huggies（好奇）',
                    description: `好奇紙尿褲專為確保寶寶的舒適穿著和自在活動而設計。讓寶寶自在成長，釋放天生的好奇心和樂觀的天性，
                      盡情擁抱快樂的探索時刻，和媽媽享受甜蜜約會。好奇一直致力於提供優秀的產品，因為我們和你一樣，總想給寶寶更好的。`
                  },
                  {
                    key: 18,
                    image: '../../content/images/testimonials/swisse.png',
                    name: 'SWISSE',
                    description: `Swisse品牌於50年代後期成立於澳大利亞的墨爾本，是澳洲自然醫學療法的先驅之一，
                      所有臨床研究均在澳洲知名高等學府進行。其采用最科學的配方與最優質的原材料，所有產品均經過臨床認證，安全有效。
                      該品牌在澳大利亞的口碑高於Blackmores，是澳洲當地最好的維生素品牌，品質卓著，在澳大利亞聯邦醫藥署的高強控制下，
                      確保您能安心服用。 “以科學實現健康，以成效主導市場”Swisse公司始創於本世紀50年代末成立於澳大利亞墨爾本，
                      澳洲自然醫學療法的先驅之一。所有產品原料均來源於最值得信任的供應商，並且盡一切可能使用最高質量的天然原料，
                      而非合成的化學成分。每一個產品從原料的采購至成品，至少經過300個以上的質量檢驗環節。
                      Swisse在研究產品配方時唯一關註的是品質，從不考慮成本。因此。Swisse產品在澳洲本土市場上的價格也略貴於其他同類產品。`
                  }
                ]} />

                <LinePartners partners={[
                  { 
                    key: 19,
                    image: '../../content/images/testimonials/blackmores.png',
                    name: '澳佳寶',
                    description: `澳佳寶™在1985年5月正式成為上市公司。目前擁有超過400名員工 ，總部設在澳大利亞悉尼。 
                      澳佳寶™一直努力為改善人們健康而推出優質、天然、健康的營養補充品。因為我們是維生素、礦物質和營養素方面的專家，
                      所以在以天然方式改善健康的專業領域裏，我們是研發和營銷的領導者。 我們的產品都必須達到世界上最嚴格的監管標準，
                      而且我們還為顧客提供誠懇可信賴的咨詢服務，並為我們的零售合作商和產品導購提供準備一系列的培訓和客戶服務計劃。
                      正是因為我們對高端品質、上選原材料、良好生產管理和尖端行業咨詢的孜孜以求和承諾，成就了澳佳寶™的今天---
                      澳洲銷量第一的天然健康品牌。 在2009-2013年澳洲讀者文摘最受信賴品牌調查中，
                      澳佳寶™連續5年榮膺“最具信譽維生素和營養補充品品牌”的殊榮。`
                  },
                  {
                    key: 20,
                    image: '../../content/images/testimonials/healthycare.png',
                    name: 'Healthy Care',
                    description: `Healthy Care是Nature’s Care Australia旗下的產品。Nature’s Care Australia
                      是澳洲最大的保健品、護膚品生產廠家之一， 是澳洲第一家獲得TGA認可的cGMP健康食品護膚品廠。
                      Nature’s Care原料采用有機、純天然植物與無汙染的海洋生物，在無菌、 真空下制造生產。
                      所有生產程序及管理符合GMP的嚴格控管標準，且所有產品遵照澳洲國家藥物管理局(TGA)的法規和要求並符合實際品牌規格。`
                  },
                  {
                    key: 21,
                    image: '../../content/images/testimonials/thompson.png',
                    name: 'THOMPSON\'S GROUP',
                    description: `THOMPSON\'S GROUP 成立於1951年，至今已有六十多年歷史，是紐西蘭最大的保健生產商。
                      於2009年和Integria Healthcare (NZ) Ltd合並，擁有更龐大的專業研究員團隊，具權威的醫學博士及完備的生產設施。 
                      Integria Healthcare (NZ) Ltd是紐西蘭食品安全局(New Zealand Food and Safety Authority，
                      簡稱NZFSA)轄下風險管理項目(Risk Management Programme，簡稱RMP)的註冊成員，所有產品均受嚴格監管。
                      Integria Healthcare (NZ) Ltd的保健品符合GMP(優良藥品制藥作業規範)和TGA的嚴格標準。 THOMPSON'S 
                      保健產品通過嚴格6項嚴格檢測，獲得由香港標準及檢定中心頒發的優質「正」印商標。`
                  }
                ]} />
                <LinePartners partners={[
                  {
                    key: 22,
                    image: '../../content/images/testimonials/beerenburg.jpg',
                    name: 'Beerenberg（百伦堡）',
                    description: `創立於1838年的Beerenberg Farm為德國家族經營代代相傳的品牌。澳大利亞不少知名餐廳均指定使用
                      Beerenberg Farm的產品，其品質有多出色，可想而知。Beerenberg公司已出口至23個國家。目前，在亞太地區超過300家
                      四星級和五星級賓館，包括香格里拉、瑞士酒店管理旗下的酒店，提供本產品。Beerenberg是澳洲著名品牌，高貴大方，
                      十分適合作婚禮回禮禮物之用，要準備結婚的新人除了要為自己扮靚靚及安排婚禮程式外，還要花點心思去回謝親友的祝賀。`
                  }]} />

              </div>
            </div>
          </div>
          {/*  End  */}
        </div>
      </section >
    )
  }
}
