import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <h2>찾을 수 없습니다</h2>
            <p>죄송합니다, 현재 페이지는 존재하지 않는 페이지입니다.</p>
            <Link href='/'>홈페이지로 돌아가기</Link>
        </div>
    )
}

export default NotFound