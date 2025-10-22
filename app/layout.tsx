import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "./components/Navigation";

// Primary font: Kyoto
const kyoto = localFont({
	src: [
		{
			path: "../public/fonts/PPKyoto-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/PPKyoto-RegularItalic.otf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../public/fonts/PPKyoto-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/PPKyoto-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/PPKyoto-BoldItalic.otf",
			weight: "700",
			style: "italic",
		},
	],
	variable: "--font-kyoto",
});

// Secondary font: Inter
const inter = localFont({
	src: "../public/fonts/Inter-VariableFont_opsz,wght.ttf",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Product Sense",
	description: "Building your product sense through analysis of exceptional digital experiences",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${kyoto.variable} ${inter.variable} antialiased`}
			>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
