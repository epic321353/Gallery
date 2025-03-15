import "./globals.css";
import Header from './components/Header'
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className="mr-20 ml-20">
                <div className="flex flex-col h-screen w-full">
                    <Header />
                    <main className="flex-1 flex items-center justify-center">{children}</main>
                </div>
            </body>
        </html>
    )
}
