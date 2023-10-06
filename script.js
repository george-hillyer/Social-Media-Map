
async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const { PinElement } = await google.maps.importLibrary("marker");
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.877233, lng: -78.769712 },
    zoom: 11.5,
    mapId: "d05c1d3d097915a3",
  });
 

/*****Markers for World Class Schools*****/

  //pin content generator
 async function getPin(ba = "#b43024", s = 1.25, g = "#ddb937", bo = "#ddb937") {
    let pin = new PinElement({
      background: ba,
      scale: s,
      glyphColor: g,
      borderColor: bo,
    });
    return await pin;
  }
  
  const WC_Ham= await getPin();
  const WCTKD_HAM = new AdvancedMarkerElement({
        map,
        position: { lat: 42.730419, lng: -78.825432 },
        title: "World Class Hamburg",
        content: WC_Ham.element,
    }); 

  const WC_OP = await getPin();
  const WCTKD_OP = new AdvancedMarkerElement({
        map,
        position:{lat:42.795062734534426, lng:-78.75544274684506 },
        title: "World Class Orchard Park",
        content: WC_OP.element,
    });

  const WC_LAN = await getPin();
  const WCTKD_LAN = new AdvancedMarkerElement({
      map,
      position:{lat: 42.87754364408732, lng: -78.69477306264201},
      content: WC_LAN.element,
  });

  const WC_AMH = await getPin();
  const WCTKD_AMH = new AdvancedMarkerElement({
    map,
    position: {lat: 42.99578870616767, lng:-78.82056086033606},
    content: WC_AMH.element,
  });

  const WC_EA = await getPin();
  const WCTKD_EA = new AdvancedMarkerElement({
    map,
    position: {lat:43.01512132974407, lng: -78.6976713848654},
    content: WC_EA.element,
  });


/**** Competitor Pin Markers *****/

//Pin Content Generator Dark Blue = #214867, Light Blue = #3c84bc
async function getComp(b = "#214867", s = 0.8, g = "#bc743c", bo = "#bc743c"){
  let pin= new PinElement({
    background: b,
    scale: s,
    glyphColor: g,
    borderColor: bo,
   });
    return await pin;
  }

      const p1 = await getComp();
      const LEMA_SOUTH = new AdvancedMarkerElement({
          map,
          position: {lat:42.733500740312095, lng:-78.84010714314759},
          title: "LEMA South",
          content: p1.element,
      });

    const p2 = await getComp();
    const AFC716 = new AdvancedMarkerElement({
          map,
          position: {lat: 42.73872806852584, lng:-78.82532468718273 },
          title: "AFC716 - Kung Fu, Tai Chi, & More",
          content: p2.element,
      });
    
    const p3 = await getComp();
    const DFD = new AdvancedMarkerElement({
      map,
      position: {lat: 42.73695774822536, lng: -78.84110493944047},
      title: "Defensive Arts Dojo",
      content: p3.element,
    });

    const p4 = await getComp();
    const UMA = new AdvancedMarkerElement({
      map,
      position:{lat:42.716564619075214, lng: -78.82918343563234},
      title: "United World Martial Arts",
      content: p4.element,
    });

    const p5 = await getComp();
    const KFB = new AdvancedMarkerElement({
      map,
      position: {lat: 42.71840650799832, lng: -78.84247773132614},
      title: "Kung Fu Buffalo",
      content: p5.element,
    });

    const p6 = await getComp();
    const KJ = new AdvancedMarkerElement({
      map,
      position: {lat:42.75976454317265, lng: -78.82851476016013},
      title: "Karate Joe's",
      content: p6.element,
    });

    const p7 = await getComp();
    const SZ = new AdvancedMarkerElement({
      map,
      position: {lat:42.71385043160155, lng: -78.84570901382978},
      title: "Sub-Zero JiuJitsu",
      content: p7.element,
    });

    const p8 = await getComp();
    const STMMA = new AdvancedMarkerElement({
      map,
      position:{lat:42.76146024894014, lng: -78.82709532947563},
      title: "Southtowns MMA",
      content: p8.element,
    });

    const p9 = await getComp();
    const MKMAA = new AdvancedMarkerElement({
      map,
      position:{lat:42.77114793470715, lng: -78.81215047365305},
      title: "Master Khechen's Martial Arts Academy",
      content: p9.element,
    });

    const p10 = await getComp();
    const SKK = new AdvancedMarkerElement({
      map,
      position:{lat:42.714196582002415, lng: -78.84471934666861},
      title: "Southtowns Kempo Karate",
      content: p10.element,
    });

    const p11 = await getComp();
    const MGMAS = new AdvancedMarkerElement({
      map,
      position:{lat:42.781572462857184, lng: -78.7472286644554},
      title:"Master Gary's Martial Arts Studio",
      content: p11.element,
    });

    const p12 = await getComp();
    const OPMA = new AdvancedMarkerElement({
      map,
      position:{lat:42.76199364033854, lng: -78.75310577735118},
      title: "Orchard Park Martial Arts",
      content: p12.element,
    });

    const p13 = await getComp();
    const MKSTKD = new AdvancedMarkerElement({
      map, 
      position:{lat:42.79866009370322, lng: -78.75253570248758},
      title: "Master Khechen's School of Taekwondo",
      content: p13.element,
    });

    const p14 = await getComp();
    const RDSMA = new AdvancedMarkerElement({
      map,
      position:{lat:42.784625855773044, lng: -78.80753218899476},
      title: "Red Dragon School of Martial Arts",
      content: p14.element,
    });

    const p15 = await getComp();
    const OSBK = new AdvancedMarkerElement({
      map,
      position:{lat:42.797651708349, lng: -78.82356378899433},
      title: "One Strike Buffalo Isshin Ryu Karate and Kobudo",
      content: p15.element,
    });

    const p16 = await getComp();
    const NCLA = new AdvancedMarkerElement({
      map,
      position: {lat:42.76072898147365, lng: -78.75452152762674},
      title: "Nickel City Longsword Academy",
      content: p16.element,
    });

    const p17 = await getComp();
    const LEMA = new AdvancedMarkerElement({
      map,
      position: {lat:42.92050645195597, lng: -78.73326365830512},
      title: "Lake Effect Martial Arts",
      content: p17.element,
    });

    const p18 = await getComp();
    const KFUSA = new AdvancedMarkerElement({
      map,
      position:{lat:42.91984120752565, lng: -78.73244395830514},
      title: "Kung Fu U.S.A.",
      content: p18.element,
    });

    const p19 = await getComp();
    const BAMA = new AdvancedMarkerElement({
      map,
      position: {lat:42.8553646669889, lng: -78.69616493132094},
      title: "Bill Adams' Martial Arts",
      content: p19.element,
    });

    const p20 = await getComp();
    const WNYKC = new AdvancedMarkerElement({
      map,
      position:{lat:42.96286073579004, lng: -78.69648773131685},
      title: "Western New York Karate Center",
      content: p20.element,
    });

    const p21 = await getComp();
    const MKMAA2 = new AdvancedMarkerElement({
      map,
      position:{lat:42.92439849590248, lng: -78.76978057549606},
      title: "Master Khechen's Martial Arts Academy",
      content: p21.element,
    });

    const p22 = await getComp();
    const STMAA = new AdvancedMarkerElement({
      map,
      position:{lat:42.924311171121325, lng: -78.77356633131829},
      title: "Seven Tigers Martial Arts Academy",
      content: p22.element,
    });

    const p23 = await getComp();
    const BBJJA = new AdvancedMarkerElement({
      map,
      position:{lat:42.85786983604435, lng:-78.7341923736498},
      title: "Buffalo Brazillian Jiu-Jitsu Academy",
      content: p23.element,
    });

    const p24 = await getComp();
    const HMAWS = new AdvancedMarkerElement({
      map, 
      position:{lat:42.84050720970606, lng:-78.77183055830818},
      title:"Horizon Martial Arts West Seneca",
      content: p24.element,
    });

    const p25 = await getComp();
    const SPAR = new AdvancedMarkerElement({
      map,
      position: {lat:42.97589516449215, lng:-78.69510163131623},
      title: "Spar Self Defense",
      content: p25.element,
    });

    const p26 = await getComp();
    const BMA = new AdvancedMarkerElement({
      map,
      position: {lat:42.99815992445254, lng:-78.82304050432883},
      title: "Buffalo Martial Arts",
      content: p26.element,
    });

    const p27 = await getComp();
    const CMA_716 = new AdvancedMarkerElement({
      map,
      position: {lat:42.99846630685479, lng: -78.8502160448088},
      title: "Championship Martial Arts 716",
      content: p27.element,
    });

    const p28 = await getComp();
    const KEAK = new AdvancedMarkerElement({
      map,
      position: {lat:43.021683859895084, lng: -78.82311693316346},
      title: "Kenpo Eagles Adaptive Karate",
      content: p28.element,
    });

    const p29 = await getComp();
    const MGTKDW = new AdvancedMarkerElement({
      map,
      position: {lat:42.99605360721457, lng:-78.69539175830221},
      title: "Master Gorino's TKD Williamsville / Clarence",
      content: p29.element,
    });

    const p30 = await getComp();
    const MKMA3 = new AdvancedMarkerElement({
      map, 
      position: {lat:43.02356933265628, lng: -78.73847586015},
      title: "Master Khechen's Martial Arts Academy",
      content: p30.element,
    });

    const p31 = await getComp();
    const MGTKDNF = new AdvancedMarkerElement({
      map,
      position: {lat:42.97675451539014, lng:-78.8224576889874},
      title: "Master Gorino's Taekwondo",
      content: p31.element,
    });

    const p32 = await getComp();
    const NRKBF = new AdvancedMarkerElement({
      map,
      position:{lat: 43.0015111598795, lng: -78.69774836015094},
      title: "9Round Kickboxing Fitness",
      content: p32.element,
    });

    const p33 = await getComp();
    const WNYMMA = new AdvancedMarkerElement({
      map,
      position: {lat:42.94255639565587, lng: -78.87640776200205},
      title: "WNY MMA and Fitness",
      content: p33.element,
    });

    const p34 = await getComp();
    const BUMA = new AdvancedMarkerElement({
      map,
      position: {lat:42.87011918164282, lng: -78.87222208899146},
      title: "Buffalo United Martial Arts Academy",
      content: p34.element,
    });

    const p35 = await getComp();
    const TBBC = new AdvancedMarkerElement({
      map,
      position:{lat:42.93644161817335, lng:-78.89357997364672},
      title: "The Buffalo Boxing Club",
      content: p35.element,
    });

    const p36 = await getComp();
    const JBF = new AdvancedMarkerElement({
      map,
      position:{lat:42.892759216302224, lng:-78.87653318714176},
      title:"Johnny's Boxing & Fitness",
      content: p36.element,
    });

  


}   //closes initmap

initMap();