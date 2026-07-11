import { Route, Routes } from "react-router-dom";
import { StoreProvider } from "./lib/store";
import BottomNav from "./components/BottomNav";
import HariIni from "./screens/HariIni";
import MingguIni from "./screens/MingguIni";
import DaftarBelanja from "./screens/DaftarBelanja";
import AdaBahan from "./screens/AdaBahan";
import Keluarga from "./screens/Keluarga";
import SemuaMenu from "./screens/SemuaMenu";
import MenuDetail from "./screens/MenuDetail";

export default function App() {
  return (
    <StoreProvider>
      <div className="mx-auto min-h-screen max-w-md bg-page pb-[110px]">
        <Routes>
          <Route path="/" element={<HariIni />} />
          <Route path="/minggu" element={<MingguIni />} />
          <Route path="/belanja" element={<DaftarBelanja />} />
          <Route path="/bahan" element={<AdaBahan />} />
          <Route path="/menu" element={<SemuaMenu />} />
          <Route path="/menu/:id" element={<MenuDetail />} />
          <Route path="/keluarga" element={<Keluarga />} />
        </Routes>
      </div>
      <BottomNav />
    </StoreProvider>
  );
}
