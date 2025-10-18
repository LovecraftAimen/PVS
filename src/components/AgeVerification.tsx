import { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface AgeVerificationProps {
  onVerified: () => void;
}

export function AgeVerification({ onVerified }: AgeVerificationProps) {
  const [showVerification, setShowVerification] = useState(false);
  const [showExit, setShowExit] = useState(false);

  useEffect(() => {
    const lastVerified = localStorage.getItem("ageVerifiedAt");
    const now = Date.now();

    if (!lastVerified || now - parseInt(lastVerified) > 3600000) {
      // se nunca verificou ou já passou 1h
      setShowVerification(true);
    } else {
      // ainda dentro do tempo, considera verificado
      onVerified();
    }
  }, [onVerified]);

  const handleVerified = () => {
    localStorage.setItem("ageVerifiedAt", Date.now().toString());
    setShowVerification(false);
    onVerified();
  };

  if (showExit) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-md mx-4 text-center">
          <h2 className="mb-4">Acesso Negado</h2>
          <p className="mb-6">
            Este site é destinado apenas para maiores de 18 anos.
          </p>
          <Button
            onClick={() => window.close()}
            className="bg-[#00AEEF] hover:bg-[#0099d4]"
          >
            Sair
          </Button>
        </div>
      </div>
    );
  }

  if (!showVerification) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md mx-4 text-center">
        <h2 className="mb-4">Você tem 18 anos ou mais?</h2>
        {/* <p className="mb-6">Você tem 18 anos ou mais?</p> */}
        <p className="mb-6 text-sm text-gray-600">
          Este site contém produtos relacionados ao tabaco e é destinado apenas
          para maiores de idade.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={handleVerified}
            className="bg-[#00AEEF] hover:bg-[#0099d4]"
          >
            Sim, tenho 18+
          </Button>
          <Button onClick={() => setShowExit(true)} variant="outline">
            Não
          </Button>
        </div>
      </div>
    </div>
  );
}
