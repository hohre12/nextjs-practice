import React from "react";
import styles from './service.module.scss'
import type { Metadata } from 'next'

type Props = {};
export const metadata: Metadata = {
	title: '주요기능',
}

function Service({ }: Props) {
	return (
		// <div className="border-4 border-yellow-500 text-2xl text-yellow-400 p-2">
		// </div>
		<div>
			<div className={styles.intro}>
				<div className={styles.wrap}>
					<h1>랩매니저 PRO로<br />연구실 환경이 확 바뀝니다!</h1>
					<h6>물품관리부터 구매까지 한번에 가능한<br />랩매니저 PRO의 주요 기능을 살펴보세요.</h6>
				</div>
			</div>
		</div>
	);
}

export default Service;