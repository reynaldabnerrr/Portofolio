import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const productsList: Product[] = [
  { id: 1, name: "Web App Development Service", category: "Full-Stack Dev", price: 1500000, image: "💻" },
  { id: 2, name: "Flutter Mobile App UI Module", category: "Mobile Dev", price: 1200000, image: "📱" },
  { id: 3, name: "Cybersecurity Vulnerability Audit", category: "Security", price: 2000000, image: "🛡️" },
  { id: 4, name: "Laravel REST API Architecture", category: "Backend API", price: 950000, image: "⚡" },
];

interface EcommerceSimulatorProps {
  isLightMode?: boolean;
  simCart: Array<{ id: number; name: string; price: number; image: string; quantity: number }>;
  setSimCart: React.Dispatch<
    React.SetStateAction<
      Array<{ id: number; name: string; price: number; image: string; quantity: number }>
    >
  >;
  scrollToSection: (id: string) => void;
}

export default function EcommerceSimulator({
  isLightMode = false,
  simCart,
  setSimCart,
  scrollToSection,
}: EcommerceSimulatorProps) {
  const [simStep, setSimStep] = useState<"cart" | "checkout" | "qris" | "paid" | "notified">("cart");
  const [simName, setSimName] = useState("");
  const [simPhone, setSimPhone] = useState("");
  const [simPaymentMethod, setSimPaymentMethod] = useState("qris");
  const [simIsProcessing, setSimIsProcessing] = useState(false);
  const [simSuccessToast, setSimSuccessToast] = useState<string | null>(null);
  const [simOrderId, setSimOrderId] = useState(0);
  const [simTimer, setSimTimer] = useState(900); // 15 minutes in seconds

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (simStep === "qris" && simTimer > 0) {
      interval = setInterval(() => {
        setSimTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [simStep, simTimer]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAddToCart = (product: Product) => {
    setSimCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        { id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 },
      ];
    });
    setSimSuccessToast(`Added ${product.name} to cart!`);
    setTimeout(() => setSimSuccessToast(null), 2500);
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setSimCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as typeof simCart
    );
  };

  const calculateSubtotal = () => {
    return simCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleStartCheckout = () => {
    if (simCart.length === 0) return;
    setSimStep("checkout");
  };

  const handleSubmitPayment = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!simName || !simPhone) return;
    setSimOrderId(Math.floor(Math.random() * 90000 + 10000));
    setSimTimer(900);
    setSimIsProcessing(true);
    setTimeout(() => {
      setSimIsProcessing(false);
      setSimStep("qris");
    }, 1200);
  };

  const handleSimulatePaymentSuccess = () => {
    setSimIsProcessing(true);
    setTimeout(() => {
      setSimIsProcessing(false);
      setSimStep("paid");
      setTimeout(() => {
        setSimStep("notified");
      }, 2000);
    }, 1200);
  };

  const handleResetSimulator = () => {
    setSimCart([]);
    setSimStep("cart");
    setSimName("");
    setSimPhone("");
    setSimOrderId(0);
  };

  const handleSendRealWhatsApp = () => {
    let cleanPhone = simPhone.replace(/\D/g, "");
    if (cleanPhone.startsWith("0")) {
      cleanPhone = "62" + cleanPhone.slice(1);
    }

    const itemsText = simCart.map((item) => `- ${item.name} (x${item.quantity})`).join("\n");
    const totalText = calculateSubtotal().toLocaleString("id-ID");

    const message = `Halo ${simName}!\n\nTerima kasih telah berbelanja di Don Neto Store.\n\nPembayaran sebesar *Rp ${totalText}* telah kami terima.\n\nRincian Pembelian:\n${itemsText}\n\nID Transaksi: #DN-${simOrderId}\nStatus: *LUNAS via QRIS (Midtrans)*\n\n_Nota ini dikirim otomatis oleh simulator website Don Neto._`;
    const url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="simulator" className="py-24 px-6 relative z-10 scroll-mt-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping"></span>
            <span>LIVE INTERACTIVE E-COMMERCE SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-outfit text-white">
            Full-Stack E-Commerce & WhatsApp Payment Gateway
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
            Test the complete automated workflow live: select digital services, simulate Midtrans QRIS payment verification, and generate real WhatsApp receipt dispatches.
          </p>
        </div>

        {/* Interactive Workspace Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Product Selection Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-white/[0.06]">
              <h3 className="font-bold text-white text-base font-outfit">Available Digital Services</h3>
              <span className="text-[10px] text-gray-400 font-mono">Select item to test</span>
            </div>

            <div className="space-y-3">
              {productsList.map((prod) => (
                <div
                  key={prod.id}
                  className="cyber-card p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/30 transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {prod.image}
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-xs group-hover:text-indigo-400 transition-colors font-outfit">
                        {prod.name}
                      </h4>
                      <span className="text-[10px] text-gray-400 block font-mono">
                        Rp {prod.price.toLocaleString("id-ID")}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(prod)}
                    className="px-3.5 py-2 bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600 rounded-xl text-xs font-bold text-indigo-300 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    + Cart
                  </button>
                </div>
              ))}
            </div>

            {simSuccessToast && (
              <div className="p-3 bg-indigo-600/10 border border-indigo-500/25 text-indigo-300 rounded-xl text-xs font-semibold flex items-center gap-2 animate-pulse">
                <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                <span>{simSuccessToast}</span>
              </div>
            )}
          </div>

          {/* Right Column: Simulated Checkout Viewport */}
          <div className="lg:col-span-7">
            <div className="mock-window p-6 relative min-h-[400px] border border-white/[0.08] shadow-[0_0_50px_rgba(99,102,241,0.12)] flex flex-col justify-between">
              {/* Window Bar Header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  <span className="text-gray-400 text-[10px] ml-2 font-mono">checkout-gateway.test</span>
                </div>
                <span className="text-[9px] text-gray-400 bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded uppercase font-semibold font-mono">
                  Step: {simStep.toUpperCase()}
                </span>
              </div>

              {/* SCREEN 1: CART DISPLAY */}
              {simStep === "cart" && (
                <div className="flex-1 flex flex-col justify-between animate-slide-up">
                  <div className="space-y-4">
                    <h4 className="font-bold text-white text-sm font-outfit flex items-center gap-2">
                      <i className="fa-solid fa-cart-shopping text-indigo-400" aria-hidden="true"></i> Your Shopping Cart
                    </h4>

                    {simCart.length === 0 ? (
                      <div className="text-center py-12 text-gray-400">
                        <i className="fa-solid fa-basket-shopping text-3xl mb-3 block text-gray-400" aria-hidden="true"></i>
                        <p className="text-xs font-medium">Your cart is empty. Please add products from the left column.</p>
                      </div>
                    ) : (
                      <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
                        {simCart.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl text-xs"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{item.image}</span>
                              <div>
                                <span className="font-bold text-white block text-xs">{item.name}</span>
                                <span className="text-[10px] text-gray-400">
                                  Rp {item.price.toLocaleString("id-ID")}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => handleUpdateQuantity(item.id, -1)}
                                className="w-5 h-5 bg-white/5 border border-white/10 rounded flex items-center justify-center font-bold text-gray-300 hover:bg-white/10"
                                aria-label={`Decrease quantity of ${item.name}`}
                              >
                                -
                              </button>
                              <span className="font-bold text-white w-4 text-center">{item.quantity}</span>
                              <button
                                type="button"
                                onClick={() => handleUpdateQuantity(item.id, 1)}
                                className="w-5 h-5 bg-white/5 border border-white/10 rounded flex items-center justify-center font-bold text-gray-300 hover:bg-white/10"
                                aria-label={`Increase quantity of ${item.name}`}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="border-t border-white/[0.06] pt-4 mt-4 space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold text-white">
                      <span>Subtotal:</span>
                      <span>Rp {calculateSubtotal().toLocaleString("id-ID")}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleStartCheckout}
                      disabled={simCart.length === 0}
                      className={`w-full py-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                        simCart.length > 0
                          ? "bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-lg shadow-indigo-600/20 cursor-pointer"
                          : "bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      Proceed to Checkout <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              )}

              {/* SCREEN 2: CUSTOMER CHECKOUT FORM */}
              {simStep === "checkout" && (
                <form onSubmit={handleSubmitPayment} className="flex-1 flex flex-col justify-between animate-slide-up">
                  <div className="space-y-4">
                    <h4 className="font-bold text-white text-sm font-outfit flex items-center gap-2">
                      <i className="fa-solid fa-address-card text-cyan-400" aria-hidden="true"></i> Formulir Pengiriman & Pembayaran
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <label htmlFor="sim-name" className="text-[10px] text-gray-400 block mb-1 font-bold">
                          NAMA PELANGGAN
                        </label>
                        <input
                          id="sim-name"
                          name="simName"
                          type="text"
                          required
                          autoComplete="name"
                          spellCheck={false}
                          placeholder="Masukkan nama Anda (misal: Budi)…"
                          value={simName}
                          onChange={(e) => setSimName(e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/[0.08] text-white rounded-lg px-3 py-2.5 text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors placeholder:text-gray-400"
                        />
                      </div>

                      <div>
                        <label htmlFor="sim-phone" className="text-[10px] text-gray-400 block mb-1 font-bold">
                          WHATSAPP NUMBER (Simulation Invoice)
                        </label>
                        <input
                          id="sim-phone"
                          name="simPhone"
                          type="tel"
                          required
                          autoComplete="tel"
                          inputMode="numeric"
                          spellCheck={false}
                          placeholder="misal: 08123456789…"
                          value={simPhone}
                          onChange={(e) => setSimPhone(e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/[0.08] text-white rounded-lg px-3 py-2.5 text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors placeholder:text-gray-400"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] text-gray-400 block mb-1 font-bold">PAYMENT METHOD</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setSimPaymentMethod("qris")}
                            className={`p-2.5 rounded-lg border text-left flex items-center justify-between text-[11px] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                              simPaymentMethod === "qris"
                                ? "bg-indigo-600/10 border-indigo-500 text-indigo-300"
                                : "bg-white/[0.02] border-white/[0.05] text-gray-400 hover:border-white/10"
                            }`}
                          >
                            <span className="font-bold">QRIS (Automated)</span>
                            <i className="fa-solid fa-qrcode text-xs" aria-hidden="true"></i>
                          </button>
                          <button
                            type="button"
                            onClick={() => setSimPaymentMethod("va")}
                            className={`p-2.5 rounded-lg border text-left flex items-center justify-between text-[11px] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                              simPaymentMethod === "va"
                                ? "bg-indigo-600/10 border-indigo-500 text-indigo-300"
                                : "bg-white/[0.02] border-white/[0.05] text-gray-400 hover:border-white/10"
                            }`}
                          >
                            <span className="font-bold">Virtual Account</span>
                            <i className="fa-solid fa-building-columns text-xs" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/[0.06] pt-4 mt-4 space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold text-white">
                      <span>Total Invoice:</span>
                      <span>Rp {calculateSubtotal().toLocaleString("id-ID")}</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setSimStep("cart")}
                        className="w-1/3 py-2.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] text-gray-300 font-bold rounded-xl text-xs transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={simIsProcessing}
                        className="w-2/3 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
                      >
                        {simIsProcessing ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                            Generating token…
                          </>
                        ) : (
                          <>
                            Generate Payment Invoice <i className="fa-solid fa-credit-card text-[10px]" aria-hidden="true"></i>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {/* SCREEN 3: MIDTRANS GATEWAY DISPLAY */}
              {simStep === "qris" && (
                <div className="flex-1 flex flex-col justify-between items-center text-center animate-slide-up py-3 font-outfit">
                  <div className="space-y-3 w-full max-w-[280px]">
                    <h4 className="font-bold text-white text-sm font-outfit">Simulated Midtrans Payment</h4>

                    {/* Countdown Timer */}
                    <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-pink-500 animate-pulse pb-1">
                      <i className="fa-solid fa-clock" aria-hidden="true"></i>
                      <span>Time Limit: {formatTimer(simTimer)}</span>
                    </div>

                    {simPaymentMethod === "qris" ? (
                      <div className="p-4 bg-white rounded-2xl flex flex-col items-center justify-center border border-indigo-200/50 shadow-lg relative overflow-hidden w-full">
                        <div className="w-36 h-36 border border-gray-200 rounded-lg flex items-center justify-center bg-gray-50 relative p-1.5 pt-3">
                          <span className="absolute top-1 text-[9px] font-black text-blue-900 tracking-wider">QRIS</span>
                          <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=110x110&color=030712&data=${encodeURIComponent(
                              "https://www.abner.my.id/"
                            )}`}
                            alt="QRIS Code"
                            className="w-28 h-28 border border-gray-300 rounded"
                          />
                        </div>
                        <span className="text-[10px] text-gray-700 font-bold mt-2 font-mono">
                          ORDER-ID: DN-{simOrderId}
                        </span>
                      </div>
                    ) : (
                      <div className="p-4 bg-[#090d16] border border-white/[0.06] rounded-2xl flex flex-col items-stretch text-left w-full space-y-3 shadow-md">
                        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                          <span className="font-bold text-white text-xs">Simulated Virtual Account</span>
                          <span className="text-[10px] text-indigo-400 font-extrabold">BANK MANDIRI</span>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[9px] text-gray-400 block font-semibold">VIRTUAL ACCOUNT NUMBER</label>
                          <div className="flex items-center justify-between bg-white/[0.04] border border-white/[0.06] rounded-lg p-2.5">
                            <span className="font-mono text-xs text-white tracking-widest font-bold">
                              88012{simPhone.replace(/\D/g, "").slice(-10).padStart(10, "0")}
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                const vaNum = `88012${simPhone.replace(/\D/g, "").slice(-10).padStart(10, "0")}`;
                                navigator.clipboard.writeText(vaNum);
                                setSimSuccessToast("Virtual Account copied!");
                                setTimeout(() => setSimSuccessToast(null), 2000);
                              }}
                              className="text-[9px] font-bold text-indigo-400 hover:text-indigo-300 px-2 py-1 bg-indigo-500/10 rounded border border-indigo-500/20 transition-colors"
                            >
                              Copy
                            </button>
                          </div>
                        </div>

                        <p className="text-[9px] text-gray-400 leading-normal">
                          Copy the Virtual Account number above and simulate a paid VA transfer by clicking the green button below.
                        </p>
                      </div>
                    )}
                    <p className="text-[10px] text-gray-400 leading-tight font-mono">
                      Total Invoice:{" "}
                      <span className="font-bold text-indigo-400">
                        Rp {calculateSubtotal().toLocaleString("id-ID")}
                      </span>
                    </p>
                  </div>

                  <div className="w-full mt-4 space-y-2">
                    <button
                      type="button"
                      onClick={handleSimulatePaymentSuccess}
                      disabled={simIsProcessing}
                      className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 glow-payment-success active:scale-[0.98]"
                    >
                      {simIsProcessing ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                          Verifying Payment…
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-circle-check" aria-hidden="true"></i>{" "}
                          {simPaymentMethod === "qris" ? "Simulate Successful Scan & Pay" : "Simulate Paid VA Transfer"}
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSimStep("checkout")}
                      className="w-full py-2 bg-white/[0.01] hover:bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:text-gray-200 rounded-xl text-[10px] transition-colors"
                    >
                      Cancel Payment
                    </button>
                  </div>
                </div>
              )}

              {/* SCREEN 4: PAYMENT APPROVED */}
              {simStep === "paid" && (
                <div className="flex-1 flex flex-col items-center justify-center text-center animate-slide-up space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-3xl text-green-400 animate-bounce shadow-lg shadow-green-500/10">
                    <i className="fa-solid fa-check" aria-hidden="true"></i>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-white text-lg font-outfit">Payment Successful!</h4>
                    <p className="text-xs text-gray-400 max-w-[280px] leading-relaxed">
                      Midtrans Gateway has successfully forwarded the payment webhook to the backend system.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-indigo-300 text-[10px] animate-pulse">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></div>
                    Sending Automated Invoice via WhatsApp…
                  </div>
                </div>
              )}

              {/* SCREEN 5: SIMULATED WHATSAPP CHAT PREVIEW */}
              {simStep === "notified" && (
                <div className="flex-1 flex flex-col justify-between animate-slide-up">
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-2.5 bg-green-950/20 border border-green-500/20 p-2.5 rounded-2xl">
                      <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm">
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                      </div>
                      <div>
                        <span className="font-bold text-white block text-xs">WhatsApp Notification Dispatch</span>
                        <span className="text-[9px] text-green-400 font-mono">
                          Invoice successfully sent to +
                          {simPhone.replace(/\D/g, "").startsWith("0")
                            ? "62" + simPhone.replace(/\D/g, "").slice(1)
                            : simPhone.replace(/\D/g, "")}
                        </span>
                      </div>
                    </div>

                    {/* WhatsApp Message Box */}
                    <div className="bg-[#0b141a] border border-[#202c33] rounded-2xl p-4 text-xs font-mono text-gray-200 relative shadow-2xl">
                      <div className="absolute top-4 -left-2 w-0 h-0 border-t-[8px] border-t-transparent border-r-[10px] border-r-[#0b141a] border-b-[8px] border-b-transparent"></div>

                      <div className="flex justify-between items-center text-[10px] text-green-400 font-bold mb-2">
                        <span>💬 Don Neto Store - INVOICE</span>
                        <span>{new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</span>
                      </div>
                      <div className="border-b border-gray-800 pb-2 mb-2 text-[10px] text-gray-400">
                        Transaction ID: <span className="text-white font-bold">#DN-{simOrderId}</span>
                      </div>
                      <div className="space-y-1 text-[11px] leading-relaxed">
                        <p>
                          Hello <span className="text-white font-bold">{simName}</span>!
                        </p>
                        <p>
                          We have received your payment of{" "}
                          <span className="text-green-400 font-bold">
                            Rp {calculateSubtotal().toLocaleString("id-ID")}
                          </span>.
                        </p>
                        <p className="pt-1.5 text-gray-400">Purchase Details:</p>
                        <ul className="list-disc pl-4 text-gray-300">
                          {simCart.map((item) => (
                            <li key={item.id}>
                              {item.name} (x{item.quantity})
                            </li>
                          ))}
                        </ul>
                        <p className="pt-2 text-[10px] text-gray-400 font-medium">
                          Status:{" "}
                          <span className="bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded font-bold border border-green-500/20 uppercase text-[9px]">
                            Paid via QRIS
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <button
                      type="button"
                      onClick={handleSendRealWhatsApp}
                      className="w-full sm:w-2/3 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-600/10 hover:shadow-green-600/20 active:scale-95"
                    >
                      <i className="fab fa-whatsapp" aria-hidden="true"></i> Send to Real WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={handleResetSimulator}
                      className="w-full sm:w-1/3 py-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-gray-300 font-bold rounded-xl text-xs transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <i className="fa-solid fa-rotate-left" aria-hidden="true"></i> Reset
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
