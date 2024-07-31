export function formatCPF(cpf:string) {
    // Remove qualquer caractere que não seja dígito
    cpf = cpf.replace(/\D/g, '');
    
    // Verifica se a string tem exatamente 11 dígitos
    if (cpf.length !== 11) {
      throw new Error("O CPF deve conter exatamente 11 dígitos.");
    }
  
    // Aplica a formatação
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  