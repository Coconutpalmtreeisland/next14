import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Incredorable</div>
            <div className={styles.text}>
                Incredorable creative thoughts agency © All rights reserved.
            </div>
        </div>
    )
}
// 이미지 출처 출처 <a href="https://kr.freepik.com/free-vector/people-teamworking-in-a-project-illustrated_11525709.htm#query=about&position=8&from_view=search&track=sph&uuid=0b2c4ad7-eb52-4ee7-8176-1a36c236afae">Freepik</a>
{/* <a href="https://kr.freepik.com/free-vector/contact-concept-for-landing-page_5155589.htm#page=2&query=email&position=21&from_view=search&track=sph&uuid=9329b6ea-b9e8-473e-b968-c5a43e54b8b0">작가 pikisuperstar</a> 출처 Freepik */ }
export default Footer