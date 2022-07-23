import { useState } from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import logo from '../img/hadicha_smm.jpg'
export let Home = () => {
    let [light , setLight] = useState(false)
    let [menu , setMenu] = useState(false)
    let [inp , setInp] = useState(false)


    let changeMenu = () => {
        setMenu(true)
    }
    let FalseMenu =() => {
        setMenu(false)
    }

    let changeLight = () => {
        setLight(true)
    }
    let FalseLight = () => {
        setLight(false)
    }

    function changeInp(){
        setInp(true)
    }
    return (
        <>
        <div className={`${light ? 'dark px-3' : 'px-3'} ${menu ? 'ov-hid' : ''}`}>
                {/*this is menu out of header  */}
            <div className={`${menu ? 'menu' : 'd-none'}`}>
                <div className={`${menu ? '' : 'd-none'}`}>
                <Link className='text-decoration-none text-dark' to='./about'>
                <h3 className='menu-text text-center'>Biz haqimizda ---</h3>
                </Link>
                <Link className='text-decoration-none text-dark' to='./about'>
                <h3 className='menu-text text-center'>Mahsulotlar --</h3>
                </Link>
                <Link className='text-decoration-none text-dark'  to='./about'>
                <h3 className='menu-text text-center'>Bizga bog'lanish -</h3>
                </Link>
                <i>Pastdagi ijtimoiy tarmoqlardagi bloglarimizga obuna boling:</i>
                <div className='d-flex w-50 justify-content-between tr-50'>
                <a className='d-block' href="https://t.me/abbosxonBlog">

                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
</svg> 
                </a>
            <a href="https://github.com/AbbosxonDeveloper">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
            </a>
            <a href="https://instagram.com/halol_biznes_smm">

<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
            </a>
                <a className='d-block' href="https://t.me/onlinepultopishish">

                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
</svg> 
                </a>
            <a href="https://github.com/abbosxon4403">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
            </a>
            </div>
                </div>
                <svg onClick={FalseMenu}  className='close bi bi-x-lg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </div>
            {/* start of home */}
        <header className={`container ${light ? 'dark d-header' : 'header'}`}>
            <div className="wrap">

            <a  href="https://google.com" className='logo'>
                <img src={logo} className='bdrs' width={70} alt="logo" />
            </a>
            <div className="searches">
                {/* moon */}
                <i className={`${light ? '' : 'd-none'}`}>
                <svg onClick={FalseLight} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                </svg>
                </i>
            <i>
            <svg onClick={changeLight} className={`${light ? 'd-none' : 'bi bi-moon'}`}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
            </svg>
            </i>
            {/* search */}
            <input placeholder='qidirish...' className={`${inp ? 'form-control' : 'd-none'}`} type="text" />
            <i>
            <svg onClick={changeInp} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            </i>
            {/* menu */}
            <i>
            <svg onClick={changeMenu} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </i>
            </div>
            </div>
        </header>
            <main className='container main'>
                <div className='what-smm text-center align-items-center'>
                <img className='big-img bigImg' src="https://www.deskera.com/blog/content/images/size/w2000/2021/07/pexels-cristian-dina-1851415.jpg" alt="smm" />

                <h3 className='text-center mt-4'>SMM nima ?</h3>
                <h5>SMM - Social Media Marketing</h5>
                <i><h5> ma'nosi : ijtimoiy media marketing</h5></i>

                </div>
                <p>
                Kulgili satirik va axborot uchun, biz har kuni va har on turli ijtimoiy media platformalarda dan quyib ma'lumotlarning har xil bo'lishi. Biz ijtimoiy mavjudotlarmiz va aloqa bizning mavjudligimizning ajralmas qismidir. Barcha faoliyati samarali yakunlandi olish uchun muloqot kerak kabi, biznes hech farq qiladi. Dunyo bo'ylab o'z fikrlari va g'oyalarini etkazish uchun 3,5 milliarddan ortiq odam ijtimoiy tarmoqlardan foydalanganligi sababli, muloqot qilish uchun ijtimoiy tarmoqlardan foydalanishga putur etkazish mumkin emas. Barcha korxonalar davom ettirish uchun aloqa kerak.                
                </p>
                <div className='text-center'>
                    <img className='bigImg bigImg' src="https://www.deskera.com/blog/content/images/2021/07/pexels-tracy-le-blanc-607812.jpg" alt="phone" />
                </div>
                <p>Ijtimoiy tarmoqlarda o'rtacha 3 soat sarflanib, u butun dunyo ko'rishi uchun sahifadagi fikrlarni olib kelish uchun kuchli vosita sifatida paydo bo'ldi. Bugungi kunda ijtimoiy tarmoqlar korxonalarga o'zlarini bozorga chiqarish rejimi sifatida yordam berish uchun qo'llarini kengaytirdi. Buni ijtimoiy Media marketingi yoki SMM deb atash mumkin.</p>
                <h3 className='what-smm-text'>What is Social Media Marketing?</h3>
                <h5 className='what-smm-long'>Ijtimoiy tarmoqlar foydalanuvchilar tomonidan yaratilgan tarkibning aloqasini osonlashtiradigan veb-saytlarga ishora qilishi odatiy bilimdir. Bu matn, fotosuratlar, videolar va boshqa tarkibni baham ko'rish uchun tez-tez foydalanadigan foydalanuvchilar tomonidan tashkil etilgan jamoa bo'lib, keyinchalik real vaqtda boshqa foydalanuvchilarga tarqaladi. Bu shaxsiy (shu jumladan faqat oila, do'stlar yoki Foydalanuvchining tanlangan a'zolari) yoki jamoat ( hamma uchun ochiq) bo'lishi mumkin.
                </h5>
                <div className='alert alert-info text-center'>
                    <i>Ijtimoiy Media marketingi sizning biznesingizni boshqarish, brendingizni yaratish va daromad olish uchun ijtimoiy tarmoqlardan foydalanishni nazarda tutadi.</i>
                </div>
                <div className="text-center">
                    <img className='bigImg' src="https://www.deskera.com/blog/content/images/size/w1600/2021/07/alexander-shatov-mr4JG4SYOF8-unsplash.jpg" alt="socials" />
                </div>
                <p>Nashr etilgan tarkib organik yoki pullik tarkib bo'lishi mumkin. Ko'pgina muvaffaqiyatli brendlar ikkala texnikani ham o'z ichiga oladi va jarayonni optimallashtirish uchun ko'plab tadqiqotlar va rejalashtirishni o'z ichiga oladi. So'nggi bir necha yil ichida ijtimoiy media marketingi sezilarli darajada rivojlandi. Ishtirok etish va strategiyalarning diqqat markazida bo'lgan yanada haqiqiy va kelishgan onlayn mavjudlikni yaratish. Ijtimoiy media mijozlar tajribasi davomida, jumladan, sotib olish, rebrending, saqlash va boshqalar.</p>

                <div className="media">
                    <div className="text-center">
                    <img className='border-img' src="https://www.deskera.com/blog/content/images/size/w600/2022/05/Untitled-design--64-.png" alt="media" />
                    </div>
                    <div className="media-texts w-75">
                    <h3>Hamkorlik haddan tashqari kasal? Siz Bundan Qochishingiz Mumkin</h3>
                    <p>Oldin COVID-19 pandemiyasi, xodimlar o'z vaqtlarining taxminan 85 foizini uyali telefonlar, elektron pochta xabarlari va uchrashuvlarda o'tkazishgan. Bu raqam…</p>
                    </div>
                </div>
                <div className="media">
                    <div className="text-center">
                    <img className='border-img' src="https://www.deskera.com/blog/content/images/size/w600/2022/04/justin-morgan-D2TZ-ashGzc-unsplash.jpg" alt="media" />
                    </div>
                    <div className="media-texts w-75">
                    <h3>6 Siz Hozir O'g'irlash Kerak Email Shablonlari Ishga</h3>
                    <p>Email aloqa va munosabatlar bino afzal usuli hisoblanadi 85 yollovchilar foizi. Oddiy qilib aytganda, elektron pochta marketingi…</p>
                    </div>
                </div>
                <div className="media">
                    <div className="text-center">
                    <img className='border-img' src="https://www.deskera.com/blog/content/images/size/w600/2022/04/Untitled-design--53-.png" alt="media" />
                    </div>
                    <div className="media-texts w-75">
                    <h3>7 Tips for Writing Successful Marketing Emails</h3>
                    <p>So'nggi statistika ma'lumotlariga ko'ra, qadar 87 reklamalar foizi o'z moddiy tarqatish uchun elektron pochta marketing foydalanish. Bilan…</p>
                    </div>
                </div>

            </main>
        </div>
            <footer className={`footer ${light ? 'dark-footer' : 'light-footer'}`}>
                <div className='container'>

                <h3 className='my-4 footer-head text-danger'>Bizni Ijtimoiy tarmoqlarda kuzating:</h3>
                <a  href="https://google.com" className='logo footer-logo'>
                <img src={logo} className='bdrs' width={70} alt="logo" />
            </a>
            <p className='footer-text'>O'tish Deskera bilan o'sib borayotgan biznes boshlash. Buxgalteriya Insights va Maqolalar, inson resurslari, savdo, ish, Moliya va yana!</p>
            <div className='d-flex w-50 justify-content-between'>
                <a className='d-block' href="https://t.me/abbosxonBlog">

                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
</svg> 
                </a>
            <a href="https://github.com/AbbosxonDeveloper">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
            </a>
            <a href="https://instagram.com/halol_biznes_smm">

<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
            </a>
                <a className='d-block' href="https://t.me/onlinepultopishish">

                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
</svg> 
                </a>
            <a href="https://github.com/abbosxon4403">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
            </a>
            </div>
                </div>
            </footer>
        </>
    )
}

