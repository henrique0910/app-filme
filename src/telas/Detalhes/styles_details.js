
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080811',
    },

    topo: {
        width: '100%',
        height: 380,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#101014',
    },

    imagemFundo: {
        display: 'none',
    },

    overlay: {
        display: 'none',
    },

    capa: {
        width: 210,
        height: 300,
        borderRadius: 15,
        marginBottom: 0,
        borderWidth: 2,
        borderColor: '#e50914',
        resizeMode: 'cover',
        elevation: 12,
    },

    conteudo: {
        padding: 22,
        marginTop: 0,
        alignItems: 'center',
    },

    titulo: {
        fontSize: 29,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 12,
    },

    categoria: {
        fontSize: 13,
        color: '#e50914',
        letterSpacing: 3,
        marginBottom: 20,
    },

    avaliacao: {
        alignItems: 'center',
        marginBottom: 25,
    },

    estrelas: {
        flexDirection: 'row',
        gap: 7,
        marginBottom: 10,
    },

    nota: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#FFD700',
    },

    linha: {
        width: '100%',
        height: 1,
        backgroundColor: '#292929',
        marginBottom: 25,
    },

    subtitulo: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 15,
        alignSelf: 'flex-start',
    },

    descricao: {
        fontSize: 16,
        color: '#c4c4c4',
        lineHeight: 26,
        textAlign: 'justify',
        marginBottom: 30,
    },

    info: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        gap: 12,
        marginBottom: 30,
    },

    infoTexto: {
        color: '#ffffff',
        fontSize: 14,
    },
});

export default styles;
