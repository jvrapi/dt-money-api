import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const categoriesAndSubcategories = [
  {
    name: 'Receitas',
    subcategories: [
      { name: 'Salário' },
      { name: '13º Salário' },
      { name: 'Dividendos' },
      { name: 'Férias' },
      { name: 'Horas extras' },
      { name: 'IR' },
      { name: 'Pensão' },
      { name: 'Resgaste Investimentos' },
      { name: 'INSS' },
    ],
  },
  {
    name: 'Investimentos',
    subcategories: [
      { name: 'Ações' },
      { name: 'CDB' },
      { name: 'LCI' },
      { name: 'LCA' },
      { name: 'Tesouro Direto' },
      { name: 'Previdência' },
      { name: 'Fundos' },
      { name: 'COE' },
      { name: 'Debêntures' },
      { name: 'Renda Fixa' },
      { name: 'Renda Variável' },
      { name: 'Fundo de Emergência' },
    ],
  },
  {
    name: 'Moradia',
    subcategories: [
      { name: 'Aluguel' },
      { name: 'Condomínio' },
      { name: 'Reforma' },
      { name: 'Seguro' },
      { name: 'IPTU' },
      { name: 'Energia' },
      { name: 'Água' },
      { name: 'Gás' },
      { name: 'Internet' },
      { name: 'Telefone' },
      { name: 'TV' },
      { name: 'Prestação' },
      { name: 'Serviços' },
    ],
  },
  {
    name: 'Alimentação',
    subcategories: [
      { name: 'Mercado' },
      { name: 'Restaurante' },
      { name: 'Fast Food' },
      { name: 'Lanches' },
      { name: 'Padaria' },
      { name: 'Hortifruti' },
      { name: 'Café' },
      { name: 'Água' },
      { name: 'Cerveja' },
      { name: 'Vinho' },
      { name: 'Sorvete' },
      { name: 'Doces' },
      { name: 'Salgados' },
      { name: 'Bebidas' },
      { name: 'Petiscos' },
    ],
  },
  {
    name: 'Transporte',
    subcategories: [
      { name: 'Gasolina' },
      { name: 'Álcool' },
      { name: 'Diesel' },
      { name: 'Gás' },
      { name: 'Pedágio' },
      { name: 'Estacionamento' },
      { name: 'Seguro' },
      { name: 'IPVA' },
      { name: 'Multas' },
      { name: 'Manutenção' },
      { name: 'Troca de Óleo' },
      { name: 'Lavagem' },
      { name: 'Revisão' },
      { name: 'Peças' },
      { name: 'Acessórios' },
      { name: 'Transporte Público' },
      { name: 'Uber' },
      { name: '99' },
      { name: 'Cabify' },
      { name: 'Táxi' },
      { name: 'Carona' },
      { name: 'Bicicleta' },
      { name: 'Moto' },
      { name: 'Carro' },
      { name: 'Van' },
      { name: 'Ônibus' },
      { name: 'Trem' },
      { name: 'Metrô' },
      { name: 'Barco' },
      { name: 'Avião' },
      { name: 'Helicóptero' },
    ],
  },
  {
    name: 'Educação',
    subcategories: [
      { name: 'Escola' },
      { name: 'Faculdade' },
      { name: 'Pós-graduação' },
      { name: 'Mestrado' },
      { name: 'Doutorado' },
      { name: 'Cursos' },
      { name: 'Livros' },
      { name: 'Material' },
      { name: 'Transporte' },
      { name: 'Alimentação' },
      { name: 'Moradia' },
      { name: 'Saúde' },
      { name: 'Lazer' },
      { name: 'Vestuário' },
      { name: 'Eletrônicos' },
      { name: 'Viagens' },
      { name: 'Investimentos' },
      { name: 'Outros' },
    ],
  },
  {
    name: 'Lazer',
    subcategories: [
      { name: 'Bar' },
      { name: 'Balada' },
      { name: 'Cinema' },
      { name: 'Teatro' },
      { name: 'Show' },
      { name: 'Viagem' },
      { name: 'Esporte' },
      { name: 'Jogos' },
      { name: 'Livros' },
      { name: 'Séries' },
      { name: 'Filmes' },
      { name: 'Cosplay' },
      { name: 'Eventos' },
      { name: 'Festas' },
      { name: 'Reuniões' },
      { name: 'Encontros' },
      { name: 'Amigos' },
      { name: 'Família' },
      { name: 'Namorado(a)' },
      { name: 'Familia' },
      { name: 'Outros' },
    ],
  },
  {
    name: 'Saúde & Beleza',
    subcategories: [
      { name: 'Academia' },
      { name: 'Personal' },
      { name: 'Médico' },
      { name: 'Exames' },
      { name: 'Medicamentos' },
      { name: 'Suplementos' },
      { name: 'Cosméticos' },
      { name: 'Cabelo' },
      { name: 'Unhas' },
      { name: 'Pele' },
      { name: 'Maquiagem' },
      { name: 'Barba' },
      { name: 'Depilação' },
      { name: 'Massagem' },
      { name: 'Spa' },
      { name: 'Estética' },
      { name: 'Cirurgia' },
      { name: 'Consultas' },
      { name: 'Outros' },
    ],
  },
  {
    name: 'Vestuário',
    subcategories: [
      { name: 'Roupas' },
      { name: 'Calçados' },
      { name: 'Acessórios' },
      { name: 'Bijuterias' },
      { name: 'Joias' },
      { name: 'Relógios' },
      { name: 'Bolsas' },
      { name: 'Mochilas' },
      { name: 'Malas' },
      { name: 'Óculos' },
      { name: 'Bonés' },
      { name: 'Chapéus' },
      { name: 'Luvas' },
      { name: 'Cachecol' },
      { name: 'Meias' },
      { name: 'Cuecas' },
      { name: 'Sutiãs' },
      { name: 'Camisolas' },
      { name: 'Pijamas' },
      { name: 'Roupa Íntima' },
      { name: 'Roupa de Banho' },
      { name: 'Roupa de Cama' },
      { name: 'Roupa de Mesa' },
      { name: 'Roupa de Cozinha' },
      { name: 'Uniformes' },
      { name: 'Fantasias' },
      { name: 'Outros' },
    ],
  },
  {
    name: 'Outros',
    subCategories: [{ name: 'Presentes' }, { name: 'Cartão de Crédito' }],
  },
];

const main = async () => {
  await Promise.all(
    categoriesAndSubcategories.map(async (category) => {
      const { name, subcategories } = category;
      const existingCategory = await prisma.category.findFirst({
        where: {
          name,
        },
      });
      if (!existingCategory) {
        const createdCategory = await prisma.category.create({
          data: {
            name,
            subCategories: {
              create: subcategories,
            },
          },
        });
        console.log(`Created category with id: ${createdCategory.id}`);
      }
    }),
  );
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
