import { useRouter } from "next/router"
import m4Baner from '@/public/images/m4-baner.jpg'
import m41 from '@/public/images/m4-1.jpg'
import m42 from '@/public/images/m4-2.jpg'
import m43 from '@/public/images/m4-3.jpg'
import m44 from '@/public/images/m4-4.jpg'
import rs7Baner from '@/public/images/audirs7-baner.jpg'
import rs71 from '@/public/images/audirs7-1.jpg'
import rs72 from '@/public/images/audirs7-2.jpg'
import rs73 from '@/public/images/audirs7-3.jpg'
import rs74 from '@/public/images/audirs7-4.jpg'
import a45Baner from '@/public/images/a45-1.jpg'
import a451 from '@/public/images/a45-2.jpg'
import a452 from '@/public/images/a45-3.jpg'
import a453 from '@/public/images/a45-4.jpg'
import a454 from '@/public/images/a45-5.jpg'
import m8Baner from '@/public/images/m8-2.jpg'
import m81 from '@/public/images/m8-1.jpg'
import m82 from '@/public/images/m8-3.jpg'
import m83 from '@/public/images/m8-5.jpg'
import m84 from '@/public/images/m8-4.jpg'
import rsq8Baner from '@/public/images/audirsq8-1.jpg'
import rsq81 from '@/public/images/audirsq8-2.jpg'
import rsq82 from '@/public/images/audirsq8-3.jpg'
import rsq83 from '@/public/images/audirsq8-4.jpg'
import rsq84 from '@/public/images/audirsq8-5.jpg'
import amggtBaner from '@/public/images/amggt-4.jpg'
import amggt1 from '@/public/images/amggt-1.jpg'
import amggt2 from '@/public/images/amggt-3.jpg'
import amggt3 from '@/public/images/amggt-5.jpg'
import amggt4 from '@/public/images/amggt-2.jpg'
import bmw7Baner from '@/public/images/bmwx7-1.jpg'
import bmw71 from '@/public/images/bmwx7-2.jpg'
import bmw72 from '@/public/images/bmwx7-3.jpg'
import bmw73 from '@/public/images/bmw7-4.jpeg'
import bmw74 from '@/public/images/bmwx7-5.jpg'
import sBaner from '@/public/images/s-1.jpg'
import s1 from '@/public/images/s-2.jpg'
import s2 from '@/public/images/s-3.jpg'
import s3 from '@/public/images/s-4.jpg'
import s4 from '@/public/images/s-5.jpg'
import rollsBaner from '@/public/images/roll-1.jpg'
import rolls1 from '@/public/images/roll-2.jpg'
import rolls2 from '@/public/images/roll-3.jpg'
import rolls3 from '@/public/images/roll-4.jpg'
import rolls4 from '@/public/images/roll-5.jpg'
import benBaner from '@/public/images/ben-1.jpg'
import ben1 from '@/public/images/ben-2.jpg'
import ben2 from '@/public/images/ben-3.jpg'
import ben3 from '@/public/images/ben-4.jpg'
import ben4 from '@/public/images/ben-5.jpg'
import mayBaner from '@/public/images/may-1.jpg'
import may1 from '@/public/images/may-2.jpg'
import may2 from '@/public/images/may-3.jpg'
import may3 from '@/public/images/may-4.jpg'
import may4 from '@/public/images/may-5.jpg'
import glsBaner from '@/public/images/gls-5.jpg'
import gls1 from '@/public/images/gls-4.jpg'
import gls2 from '@/public/images/gls-3.jpg'
import gls3 from '@/public/images/gls-1.jpg'
import gls4 from '@/public/images/gls-2.jpg'
import b5Baner from '@/public/images/5-2.jpg'
import b51 from '@/public/images/5-5.jpg'
import b52 from '@/public/images/5-3.jpg'
import b53 from '@/public/images/5-4.jpg'
import b54 from '@/public/images/5-1.jpg'
import b3Baner from '@/public/images/3-2.jpg'
import b31 from '@/public/images/3-1.jpg'
import b32 from '@/public/images/3-3.jpg'
import b33 from '@/public/images/3-4.jpg'
import b34 from '@/public/images/3-5.jpg'
import gleBaner from '@/public/images/gle-2.jpg'
import gle1 from '@/public/images/gle-1.jpg'
import gle2 from '@/public/images/gle-3.jpg'
import gle3 from '@/public/images/gle-4.jpg'
import gle4 from '@/public/images/gle-5.jpg'
import CarInfo from "@/components/CarInfo"
import CarInfoPage from "@/components/CarInfoPage"
import Head from "next/head"
import React from "react"

const cars = [
    {id: 'bmw-m4', image1: m4Baner, image2: m41, image3: m42, image4: m43, image5: m44, name: 'BMW M4', hp: '510', top: '3,4', drive: '4x4', max: '300', engine: '3.0L TwinTurbo', gearBox: 'Automatyczna', info: 'BMW M4 Coup?? to purystyczne sportowe coup?? o wy??mienitych w??a??ciwo??ciach jezdnych. To zas??uga wysokowydajnego silnika M TwinPower Turbo o mocy 480 KM, nap??du tylnego oraz zaawansowanym technologiom zaczerpni??tym ze sport??w motorowych, takim jak uk??ad jezdny M z aktywnym mechanizmem r????nicowym M. Doskonale zestopniowana 6-biegowa skrzynia manualna M z kr??tkimi, precyzyjnymi skokami d??wigni umo??liwia niezwykle intensywn?? interakcj?? mi??dzy kierowc?? a pojazdem. Sportowy wygl??d zewn??trzny oraz charakterystyczne dla M wyposa??enie i detale dodatkowo podkre??laj?? dynamiczny charakter BMW M4 Coup??.', about: 'BMW M4 Competition Coup?? to najmocniejszy model BMW serii 4 Coup?? M. Wyposa??one w wysokowydajny sze??ciocylindrowy rz??dowy silnik benzynowy M TwinPower Turbo o mocy 510 KM oraz wiele rozwi??za?? uk??adu nap??dowego i jezdnego zaczerpni??tych z motorsportu oferuje dynamik?? jazdy na najwy??szym poziomie. Opcjonalny nap??d na wszystkie ko??a M xDrive z aktywnym mechanizmem r????nicowym M gwarantuje maksymaln?? dynamik?? jazdy na co dzie?? i na torze wy??cigowym. Atletyczny charakter to r??wnie?? zas??uga wyrazistej stylistyki przodu, bok??w i ty??u, a tak??e opcjonalnych karbonowych element??w M wewn??trz i na zewn??trz.', price: {one: '2000', two: '1500', three: '1000', four: '700', five: '600'}},
    {id: 'audi-rs7', image1: rs7Baner, image2: rs71, image3: rs72, image4: rs73, image5: rs74, name: 'Audi RS7', hp: '610', top: '3,4', drive: '4x4', max: '305', engine: '4.0L', gearBox: 'Automatyczna', info: 'Audi RS 7 Sportback performance wniesie do Twojej codzienno??ci imponuj??c?? dynamik??. Opcjonalne sportowe zawieszenie RS plus z systemem Dynamic Ride Control (DRC) i opcjonalny pakiet RS dynamic plus z pr??dko??ci?? maksymaln?? podwy??szon?? do 305 km/h zapewni?? przyjemno???? z jazdy.', about: 'Liczby, kt??re przykuwaj?? uwag??: czterolitrowy silnik V8 biturbo TFSI o mocy 463 kW zapewnia przyspieszenie od 0 do 100 km/h w 3,4 sekundy.', price: {one: '2500', two: '2000', three: '1500', four: '1000', five: '800'}},
    {id: 'mercedes-a45', image1: a45Baner, image2: a451, image3: a452, image4: a453, image5: a454, name: 'Mercedes A45 AMG', hp: '387', top: '4,0', drive: '4x4', max: '250', engine: '2.0L', gearBox: 'Automatyczna', info: 'A 45 4Matic+ (2.0 R4; 387 KM, 480 Nm) z 8-biegow?? przek??adni?? dwusprz??g??ow?? AMG SPEEDSHIFT DCT 8G i nap??dem na wszystkie ko??a, przyspieszenie 0-100 km/h: 4,0 s, pr??dko???? maksymalna: 250 km/h, ??rednie zu??ycie paliwa: 8,7-9,1 l/100 km.', about: 'Przetestuj ju?? dzi??.', price: {one: '1300', two: '1000', three: '800', four: '700', five: '600'}},
    {id: 'bmw-m8', image1: m8Baner, image2: m81, image3: m82, image4: m83, image5: m84, name: 'BMW M8', hp: '610', top: '3,2', drive: '4x4', max: '310', engine: '4.4L', gearBox: 'Automatyczna', info: 'Wystarczy wspomnie??, ??e M8 (zar??wno w wersji coupe, jak i kabriolet) nap??dzane jest tym samym podw??jnie do??adowanym silnikiem V8 o pojemno??ci 4,4 l co M5. Oznacza to 600 KM i 750 Nm. Przek??ada si?? to na przyspieszenie do 100 km/h w imponuj??ce 3,3 s', about: ' BMW M Serii 8 Coup?? zapewniaj?? maksymalnie sportow?? i luksusow?? rado???? z jazdy ??? zar??wno na drodze, jak i na torze wy??cigowym.', price: {one: '2500', two: '2000', three: '1500', four: '1000', five: '800'}},
    {id: 'mercedes-amg-gt-s', image1: amggtBaner, image2: amggt1, image3: amggt2, image4: amggt3, image5: amggt4, name: 'Mercedes AMG GTR S', hp: '560', top: '3,3', drive: '4x4', max: '299', engine: '4.0L', gearBox: 'Automatyczna', info: 'Mercedes-AMG GT R ma pod mask?? podw??jnie do??adowane 4-litrowe V8, kt??re generuje moc 585 i maksymalny moment obrotowy 700 Nm (+50 Nm). Zwi??kszona dawka mocy oraz momentu w por??wnaniu do odmiany GT S pozwoli??a "urwa??" z wyniku przyspieszenia do 100 km/h 0,2 s i zwi??kszy?? maksymaln?? pr??dko???? o 8 km/h do 318 km/h.', about: 'Mercedes wyszed?? z za??o??enia, i?? dla niekt??rych 510 KM pod mask?? GT S mo??e by?? niewystarczaj??c?? dawk?? mocy i przygotowa?? jeszcze mocniejsz?? odmian?? modelu GT.', price: {one: '2800', two: '2200', three: '1700', four: '1200', five: '1100'}},
    {id: 'audi-rsq8', image1: rsq8Baner, image2: rsq81, image3: rsq82, image4: rsq83, image5: rsq84, name: 'Audi RSQ8', hp: '600', top: '3,8', drive: '4x4', max: '305', engine: '4.0L', gearBox: 'Automatyczna', info: 'Daj upust emocjom: za kierownic?? Audi RS Q8 przyjdzie Ci to z niespotykan?? dot??d ??atwo??ci??. Na ??yczenie RS Q8 oferuje zwi??kszenie pr??dko??ci maksymalnej do 280 km/h lub 305 km/h (ograniczenie elektroniczne).', about: 'Audi RS Q8 jest seryjnie wyposa??one w sta??y nap??d na cztery ko??a quattro, a opcjonalny sportowy mechanizm r????nicowy steruje selektywnym rozdzia??em momentu obrotowego pomi??dzy ko??ami. Adaptacyjne zawieszenie pneumatyczne z typow?? dla modeli RS charakterystyk?? jak r??wnie?? tylna o?? skr??tna gwarantuj?? optymaln?? zwrotno???? i maksymaln?? stabilno???? jazdy.', price: {one: '2500', two: '2000', three: '1500', four: '1000', five: '800'}},
    {id: 'bmw-x7', image1: bmw7Baner, image2: bmw71, image3: bmw72, image4: bmw73, image5: bmw74, name: 'BMW X7', hp: '280', top: '5,2', drive: '4x4', max: '250', engine: '3.0L', gearBox: 'Automatyczna', info: 'BMW X7 mierzy 515,1 cm d??ugo??ci, 200,0 cm szeroko??ci (221,8 cm z lusterkami) i 180,5 cm wysoko??ci. Jego rozstaw osi to 310,5 cm. Bazowa pojemno???? baga??nika wynosi 750 litr??w, a maksymalnie mo??na j?? powi??kszy?? do 2120 l.', about: 'BMW X7 towi??kszy i bardziej presti??owy brat SUV-a X5, jest on bezpo??rednim konkurentem Mercedesa GLS.', price: {one: '2500', two: '2000', three: '1500', four: '1000', five: '800'}},
    {id: 'mercedes-s', image1: sBaner, image2: s1, image3: s2, image4: s3, image5: s4, name: 'Mercedes S Klasa', hp: '810', top: '3,3', drive: '4x4', max: '290', engine: '4.0L', gearBox: 'Automatyczna', info: 'Moc systemowa rz??du 802 KM i maksymalny moment obrotowy 1430 niutonometr??w zapewniaj?? maszynie przyspieszenie od zera do 100 km/h w oko??o 3,3 sekundy. Pr??dko???? maksymaln?? ograniczono do 290 km/h (wersja z opcjonalnym pakietem kierowcy AMG).', about: 'Nowy Mercedes klasy S nie rozczarowuje ??? to nadal ikona luksusu, presti??u i dobrego smaku.', price: {one: '2500', two: '2000', three: '1500', four: '1000', five: '800'}},
    {id: 'rolls-royce-phantom', image1: rollsBaner, image2: rolls1, image3: rolls2, image4: rolls3, image5: rolls4, name: 'Rolls Royce Phantom', hp: '552', top: '4,8', drive: '4x4', max: '270', engine: '6.75L', gearBox: 'Automatyczna', info: 'Szeroki s??upek D, wyra??nie opadaj??ca ku ty??owi linia boczna, mocno geometryczne kszta??ty i daj??ca wra??enie solidno??ci, niemal monumentalna sylwetka. Ju?? w ???kr??tkiej??? wersji SWB auto prezentuje si?? majestatycznie, ale nic dziwnego ??? mierzy dok??adnie 5762 mm d??ugo??ci.', about: 'Rolls-Royce Phantom po liftingu to majstersztyk w ka??dym calu.', price: {one: '9000', two: '8000', three: '7500', four: '5000', five: '4000'}},
    {id: 'bentley-continental-gt', image1: benBaner, image2: ben1, image3: ben2, image4: ben3, image5: ben4, name: 'Bentley Continental GT', hp: '650', top: '3,2', drive: '4x4', max: '330', engine: '4.0L', gearBox: 'Automatyczna', info: 'W roku 2022 sprawy maj?? si?? zaskakuj??co podobnie. G????wn?? atrakcj?? nowego Bentleya Continentala GT Speed jest zawarta ju?? w samej nazwie pr??dko????. Ta si??ga tutaj a?? 335 km/h. Nie jest ona jednak zas??ug?? modnego teraz, elektrycznego nap??du, ani nawet ??adnej formy hybrydyzacji.', about: ' Bentley Continental GT Speed pokona?? konkurencj??, zdobywaj??c tytu?? Samochodu Roku 2022.', price: {one: '3500', two: '3000', three: '2500', four: '2000', five: '1800'}},
    {id: 'mercedes-s-maybach', image1: mayBaner, image2: may1, image3: may2, image4: may3, image5: may4, name: 'Mercedes S Maybach', hp: '810', top: '3,2', drive: '4x4', max: '310', engine: '4.0L', gearBox: 'Automatyczna', info: 'Nowy Mercedes-Maybach klasy S mierzy 546,9 cm d??ugo??ci, 192,1 cm szeroko??ci i 151,0 cm wysoko??ci. Rozstaw osi wynosi 339,6 cm i zosta?? zwi??kszony a?? o 18 cm w por??wnaniu z d??ug?? wersj?? Mercedesa klasy S (o 29 cm w por??wnaniu ze ???zwyk??????? S-klas??). Dodatkowe centymetry w ca??o??ci przypadaj?? podr????uj??cym z ty??u.', about: 'Mercedes-Maybach klasy S to flagowa limuzyna ze Stuttgartu', price: {one: '3500', two: '3000', three: '2500', four: '2000', five: '1800'}},
    {id: 'mercedes-gls-maybach', image1: glsBaner, image2: gls1, image3: gls2, image4: gls3, image5: gls4, name: 'Mercedes GLS Maybach', hp: '650', top: '3,9', drive: '4x4', max: '300', engine: '4.0L', gearBox: 'Automatyczna', info: 'Mercedes-Maybach GLS 600 ma czterolitrowy silnik biturbo V8, o mocy 579 KM i maksymalny moment obrotowy 730 Nm. 2,8 tonowy kolos przyspiesza do 100 km/h w 4,9 sekundy i osi??ga maksymaln?? pr??dko???? 250 km/h.', about: 'Mercedes-Maybach GLS zapewnia najwy??szy poziom luksusu. Wyj??tkowe po????czenie przestrzeni, ekskluzywno??ci i najnowocze??niejszych technologii.', price: {one: '3500', two: '3000', three: '2500', four: '2000', five: '1800'}},
    {id: 'bmw-5', image1: b5Baner, image2: b51, image3: b52, image4: b53, image5: b54, name: 'BMW 5', hp: '230', top: '6,2', drive: '4x4', max: '240', engine: '2.0L', gearBox: 'Automatyczna', info: 'BMW serii 5 Touring mierzy 496,3 cm d??ugo??ci, 186,8 cm szeroko??ci (212,6 cm z lusterkami) i 149,8 cm wysoko??ci. Jego rozstaw osi to 297,5 cm. Bazowa pojemno???? baga??nika wynosi 560 litr??w, a maksymalnie mo??na j?? powi??kszy?? do 1700 l.', about: 'Idealne do jazdy po mie??cie.', price: {one: '500', two: '400', three: '350', four: '300', five: '220'}},
    {id: 'bmw-3', image1: b3Baner, image2: b31, image3: b32, image4: b33, image5: b34, name: 'BMW 3', hp: '210', top: '7,4', drive: '4x4', max: '230', engine: '2.0L', gearBox: 'Automatyczna', info: 'BMW serii 3 Touring mierzy 470,9 cm d??ugo??ci, 182,7 cm szeroko??ci (206,8 cm z lusterkami) i 144,0 cm wysoko??ci. Jego rozstaw osi to 285,1 cm. Bazowa pojemno???? baga??nika wynosi 500 litr??w, a maksymalnie mo??na j?? powi??kszy?? do 1510 l.', about: 'Idealne auto na podr????', price: {one: '500', two: '400', three: '350', four: '300', five: '220'}}, {id: 'mercedes-gle-220', image1: gleBaner, image2: gle1, image3: gle2, image4: gle3, image5: gle4, name: 'Mercedes GLE 220', hp: '270', top: '7,3', drive: '4x4', max: '220', engine: '2.0L', gearBox: 'Automatyczna', info: 'Mercedes GLE (V167) mierzy 492,4 cm d??ugo??ci, 202,2 cm szeroko??ci (215,7 cm z lusterkami) i 179,7 cm wysoko??ci. Jego rozstaw osi to 299,5 cm. Bazowa pojemno???? baga??nika wynosi 630 litr??w, a maksymalnie mo??na j?? powi??kszy?? do 2055 l.', about: 'Idealny SUV na wycieczk??.', price: {one: '600', two: '500', three: '450', four: '400', five: '310'}},
]

const Car = () => {

    const router = useRouter()

    return (
        <>
        {cars.map((car, i) => {
                if(car.id === router.query.id) {
                    console.log(car.name)
                    return (
                        <Head key={i}>
                            <title>{`${car.name} | Wypo??yczalnia`}</title>
                            <meta name="description" content={car.name} />
                        </Head>
            )}})}
            <div className='car-info-baner'>
            {cars.map((car, i) => {
                if(car.id === router.query.id) {
                    return (
                        <CarInfo key={i} {...car}/>
            )}})}
            </div>
            <div className='car-info-page'>
            {cars.map((car, i) => {
                if(car.id === router.query.id) {
                    return (
                        <CarInfoPage key={i} {...car}/>
            )}})}
            </div>
        </>
)}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://raw.githubusercontent.com/JakubKP/cars-api/main/cars.json`)
    const cars = await res.json()
  
    const car = cars.find(car => car.link === params.id)
  
    return {
      props: {
        car,
      },
    }
  }

  export async function getStaticPaths() {
    const res = await fetch(`https://raw.githubusercontent.com/JakubKP/cars-api/main/cars.json`)
    const cars = await res.json()

    const paths = cars.map((car) => ({
        params: { id: car.link },
    }));
    return { paths, fallback: false };
}

export default Car;