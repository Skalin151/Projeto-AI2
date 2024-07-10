const User = require('../models/userModel');
const Area = require('../models/areaModel');
const Subarea = require('../models/subareaModel');
const Post = require('../models/postModel');
const Event = require('../models/eventModel');
const Establishment = require('../models/establishmentModel');
const EstablishmentReview = require('../models/establishmentReviewModel');
const EventReview = require('../models/eventReviewModel');
const EstablishmentPhoto = require('../models/establishmentPhoto');
const EventPhoto = require('../models/eventPhotoModel');
const SignUp = require('../models/signupModel');
const Notification = require('../models/notificationModel');
const { sequelize } = require('./database');

const utilizadores = [
  { nome: 'Maria Santos', nif: '123456789', localidade: 'Viseu', telemovel: '912345678', email: 'maria.santos@email.pt', estado: true, isAdmin: true, cargo: 'Gestor de Eventos' },
  { nome: 'João Oliveira', nif: '234567890', localidade: 'Tomar', telemovel: '923456789', email: 'joao.oliveira@email.pt', estado: true, isAdmin: false, cargo: 'Coordenador de Saúde' },
  { nome: 'Ana Silva', nif: '345678901', localidade: 'Fundão', telemovel: '934567890', email: 'ana.silva@email.pt', estado: true, isAdmin: false, cargo: 'Treinador Desportivo' },
  { nome: 'Pedro Costa', nif: '456789012', localidade: 'Portalegre', telemovel: '945678901', email: 'pedro.costa@email.pt', estado: true, isAdmin: true, cargo: 'Diretor de Formação' },
  { nome: 'Sofia Martins', nif: '567890123', localidade: 'Vila Real', telemovel: '956789012', email: 'sofia.martins@email.pt', estado: true, isAdmin: false, cargo: 'Chef de Cozinha' },
  { nome: 'Rui Ferreira', nif: '678901234', localidade: 'Viseu', telemovel: '967890123', email: 'rui.ferreira@email.pt', estado: true, isAdmin: false, cargo: 'Gestor de Alojamento' },
  { nome: 'Carla Rodrigues', nif: '789012345', localidade: 'Tomar', telemovel: '978901234', email: 'carla.rodrigues@email.pt', estado: true, isAdmin: false, cargo: 'Coordenador de Transportes' },
  { nome: 'Miguel Alves', nif: '890123456', localidade: 'Fundão', telemovel: '989012345', email: 'miguel.alves@email.pt', estado: true, isAdmin: true, cargo: 'Diretor de Lazer' }
];

const areas = [
  { nome: 'Saúde' },
  { nome: 'Desporto' },
  { nome: 'Formação' },
  { nome: 'Gastronomia' },
  { nome: 'Alojamento' },
  { nome: 'Transportes' },
  { nome: 'Lazer' }
];

const subareas = [
  { idArea: 1, nome: 'Clinicas médicas e hospitais' },
  { idArea: 1, nome: 'Clínicas dentárias' },
  { idArea: 1, nome: 'Centros de bem-estar' }, 
  { idArea: 2, nome: 'Ginásios' },
  { idArea: 2, nome: 'Atividades ao ar livre' },
  { idArea: 2, nome: 'Desportos aquáticos' },
  { idArea: 3, nome: 'Centros de Formação' },
  { idArea: 3, nome: 'Escolas' },
  { idArea: 3, nome: 'Workshops e seminários' }, 
  { idArea: 4, nome: 'Restaurantes' },
  { idArea: 4, nome: 'Shoppings' },
  { idArea: 4, nome: 'Mercados locais' },
  { idArea: 5, nome: 'Quartos para arrendar' },
  { idArea: 5, nome: 'Casas para alugar' },
  { idArea: 5, nome: 'Alojamento local' }, 
  { idArea: 6, nome: 'Boleias' },
  { idArea: 6, nome: 'Transportes públicos' },
  { idArea: 6, nome: 'Aluguer de veículos' }, 
  { idArea: 7, nome: 'Cinema' },
  { idArea: 7, nome: 'Parques' },
  { idArea: 7, nome: 'Museus e galerias' } 
];

const postos = [
  { nome: 'Viseu' },
  { nome: 'Tomar' },
  { nome: 'Fundão' },
  { nome: 'Portalegre' },
  { nome: 'Vila Real' }
];

const eventos = [
  { idArea: 1, idSubarea: 1, idCriador: 1, idAdmin: 1, idPosto: 1, titulo: 'Feira de Saúde Integral', descricao: 'Feira de Saúde Integral com foco em prevenção e bem-estar em Viseu', data: '2024-09-20', hora: '09:00:00', morada: 'Parque Aquilino Ribeiro, Viseu', estado: true, foto: 'saude-viseu.jpg' },
  { idArea: 1, idSubarea: 2, idCriador: 2, idAdmin: 2, idPosto: 2, titulo: 'Semana do Yoga e Meditação', descricao: 'Semana dedicada à prática de yoga e meditação para todos os níveis em Tomar', data: '2024-06-15', hora: '07:30:00', morada: 'Mata Nacional dos Sete Montes, Tomar', estado: true },

  { idArea: 2, idSubarea: 4, idCriador: 3, idAdmin: 3, idPosto: 3, titulo: 'Corrida de Montanha do Fundão', descricao: 'Competição de corrida de montanha nas serras do Fundão', data: '2024-08-05', hora: '08:00:00', morada: 'Serra da Gardunha, Fundão', estado: true, foto: 'corrida-fundao.jpg' },
  { idArea: 2, idSubarea: 3, idCriador: 4, idAdmin: 4, idPosto: 4, titulo: 'Torneio de Futsal Interescolar', descricao: 'Torneio de futsal entre escolas de Portalegre', data: '2024-07-10', hora: '14:00:00', morada: 'Pavilhão Municipal de Portalegre', estado: true },

  { idArea: 3, idSubarea: 6, idCriador: 5, idAdmin: 5, idPosto: 5, titulo: 'Simpósio de Energias Renováveis', descricao: 'Simpósio sobre avanços em energias renováveis na Universidade de Trás-os-Montes e Alto Douro', data: '2024-10-12', hora: '09:30:00', morada: 'UTAD, Vila Real', estado: true },
  { idArea: 3, idSubarea: 5, idCriador: 6, idAdmin: 6, idPosto: 1, titulo: 'Workshop de Artes Digitais', descricao: 'Workshop prático de artes digitais e design gráfico em Viseu', data: '2024-04-18', hora: '15:00:00', morada: 'Escola Superior de Tecnologia e Gestão de Viseu', estado: true, foto: 'artes-digitais-viseu.jpg' },

  { idArea: 4, idSubarea: 7, idCriador: 7, idAdmin: 7, idPosto: 2, titulo: 'Festival da Gastronomia Templária', descricao: 'Festival gastronómico inspirado na história templária de Tomar', data: '2024-08-20', hora: '12:00:00', morada: 'Praça da República, Tomar', estado: true, foto: 'gastronomia-tomar.jpg' },
  { idArea: 4, idSubarea: 8, idCriador: 8, idAdmin: 8, idPosto: 3, titulo: 'Rota dos Sabores da Beira', descricao: 'Circuito gastronómico pelos sabores tradicionais da Beira no Fundão', data: '2024-09-25', hora: '18:00:00', morada: 'Centro Histórico, Fundão', estado: true },

  { idArea: 5, idSubarea: 9, idCriador: 1, idAdmin: 1, idPosto: 4, titulo: 'Feira de Turismo Rural', descricao: 'Feira dedicada ao turismo rural e alojamento local em Portalegre', data: '2024-07-05', hora: '10:00:00', morada: 'Parque de Feiras e Exposições de Portalegre', estado: true, foto: 'turismo-portalegre.jpg' },
  { idArea: 5, idSubarea: 10, idCriador: 2, idAdmin: 2, idPosto: 5, titulo: 'Conferência de Hotelaria Sustentável', descricao: 'Conferência sobre práticas sustentáveis na hotelaria em Vila Real', data: '2024-11-22', hora: '09:00:00', morada: 'Hotel Mira Corgo, Vila Real', estado: true },

  { idArea: 6, idSubarea: 11, idCriador: 3, idAdmin: 3, idPosto: 1, titulo: 'Exposição de Veículos Elétricos', descricao: 'Exposição e test-drive de veículos elétricos em Viseu', data: '2024-05-18', hora: '09:00:00', morada: 'Feira de São Mateus, Viseu', estado: true, foto: 'eletricos-viseu.jpg' },
  { idArea: 6, idSubarea: 12, idCriador: 4, idAdmin: 4, idPosto: 2, titulo: 'Passeio de Bicicleta Histórico', descricao: 'Passeio de bicicleta pelos pontos históricos de Tomar', data: '2024-06-25', hora: '10:00:00', morada: 'Convento de Cristo, Tomar', estado: true },

  { idArea: 7, idSubarea: 13, idCriador: 5, idAdmin: 5, idPosto: 3, titulo: 'Festival de Música da Beira', descricao: 'Festival de música com artistas nacionais e internacionais no Fundão', data: '2024-10-05', hora: '19:00:00', morada: 'Pavilhão Multiusos do Fundão', estado: true, foto: 'musica-fundao.jpg' },
  { idArea: 7, idSubarea: 14, idCriador: 6, idAdmin: 6, idPosto: 4, titulo: 'Bienal de Arte Contemporânea', descricao: 'Bienal de arte contemporânea com foco em artistas emergentes em Portalegre', data: '2024-11-10', hora: '10:00:00', morada: 'Centro de Artes do Espectáculo de Portalegre', estado: true }
];

const estabelecimentos = [
  { idArea: 1, idSubarea: 1, idCriador: 1, idAdmin: 1, idPosto: 1, nome: 'Clínica Médica Viseu', descricao: 'Clínica especializada em medicina geral e familiar', morada: 'Rua Dr. Luís Ferreira, 3500-117 Viseu', estado: true, foto: 'clinica-viseu.jpg' },
  { idArea: 2, idSubarea: 4, idCriador: 2, idAdmin: 2, idPosto: 2, nome: 'Ginásio TomarFit', descricao: 'Ginásio com aulas de grupo e personal trainers', morada: 'Avenida Norton de Matos, 2300-313 Tomar', estado: true, foto: 'tomarfit.jpg' },
  { idArea: 3, idSubarea: 7, idCriador: 3, idAdmin: 3, idPosto: 3, nome: 'Centro de Formação Fundão', descricao: 'Centro de formação profissional em diversas áreas', morada: 'Rua Cidade da Covilhã, 6230-346 Fundão', estado: true, foto: 'formacao-fundao.jpg' },
  { idArea: 4, idSubarea: 10, idCriador: 4, idAdmin: 4, idPosto: 4, nome: 'Restaurante Gourmet', descricao: 'Restaurante de cozinha gourmet com pratos internacionais', morada: 'Largo do Mercado, 7300-150 Portalegre', estado: true, foto: 'gourmet.jpg' },
  { idArea: 5, idSubarea: 12, idCriador: 5, idAdmin: 5, idPosto: 5, nome: 'Hostel Vila Real', descricao: 'Hostel económico no centro da cidade', morada: 'Rua do Comércio, 5000-123 Vila Real', estado: true, foto: 'hostel-vilareal.jpg' },
  { idArea: 6, idSubarea: 14, idCriador: 6, idAdmin: 6, idPosto: 1, nome: 'Rent-a-Car Viseu', descricao: 'Empresa de aluguer de veículos ligeiros e comerciais', morada: 'Rua Alexandre Herculano, 3500-035 Viseu', estado: true, foto: 'rentacar-viseu.jpg' },
  { idArea: 7, idSubarea: 15, idCriador: 7, idAdmin: 7, idPosto: 2, nome: 'Cinema Tomar', descricao: 'Cinema com exibição de filmes nacionais e internacionais', morada: 'Avenida Marquês de Tomar, 2300-586 Tomar', estado: true, foto: 'cinema-tomar.jpg' }
];

const carregarTabelas = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(utilizadores);
    await Area.bulkCreate(areas);
    await Subarea.bulkCreate(subareas);
    await Post.bulkCreate(postos);
    await Event.bulkCreate(eventos);
    await Establishment.bulkCreate(estabelecimentos);

    console.log('Tabelas carregadas com sucesso!');
  } catch (error) {
    console.error('Erro ao carregar tabelas:', error);
  }
};


module.exports = carregarTabelas;