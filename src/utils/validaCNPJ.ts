export function formatCNPJ(cnpj:string) {
    // Remove qualquer caractere que não seja dígito
    cnpj = cnpj.replace(/\D/g, '');
  
    // Verifica se a string tem exatamente 14 dígitos
    if (cnpj.length !== 14) {
      throw new Error("O CNPJ deve conter exatamente 14 dígitos.");
    }
  
    // Aplica a formatação
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  }