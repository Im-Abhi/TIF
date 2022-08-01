import Head from 'next/head';

import GetStarted from '../components/GetStarted/GetStarted';
import ShortenIt from '../components/ShortenIt/ShortenIt';
import Statistics from '../components/Statistics/Statistics';

export default function Home() {
	return (
		<>
			<Head>
				<title>ShortenIt</title>
			</Head>
			<div>
				<GetStarted />
				<ShortenIt />
				<Statistics />
			</div>
		</>
	)
}
