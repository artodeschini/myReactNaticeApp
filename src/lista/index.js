import React, {Component} from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

class Lista extends Component {

    constructor(props) {
        super(props);

        this.state = {
            feed: this.props.data
        };

        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.carregarIconeLike = this.carregarIconeLike.bind(this); 
    }

    carregarIconeLike(likeada) {
        return likeada ? require('../img/likeada.png') : require('../img/like.png');
    }

    mostraLikes(likers) {
        let feed = this.state.feed;

        if (feed.likers) {;
            return(
                <Text style={styles.likers}>
                    {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
                </Text>     
            );
        } else {
            return;
        }
    }

    like() {
        let feed = this.state.feed;

        if (feed.likeada) {
            this.setState({
                feed: {
                    ...feed, // d+ propriedade para nao sobrescrever
                    likeada: false,
                    likers: feed.likers -1
                }
            })
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers +1
                }
            })
        }

    }

    render() {
        return(
            <View style={styles.areaFeed}>
                <View style={styles.viewPerfil}>
                    <Image source={{uri: this.state.feed.imgperfil}}
                        style={styles.fotoPerfil}>
                    </Image>
                    <Text style={styles.nomeUsuario}>
                        {this.state.feed.nome}
                    </Text>
                </View>

                <Image resizeMode="cover"
                    style={styles.fotoPublicacao}
                    source={{uri:  this.state.feed.imgPublicacao}}>

                </Image>
                <View style={styles.areaBtn}>
                    <TouchableOpacity onPress={this.like}>
                        {/* <Image source={require('../img/like.png')} */}
                        <Image source={this.carregarIconeLike(this.state.feed.likeada)}
                                style={styles.iconelike}>   
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../img/send.png')}
                            style={styles.iconelike}>
                                
                        </Image>
                    </TouchableOpacity>
                </View>

                {this.mostraLikes(this.state.feed.likers)}

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>
                        {this.state.feed.nome}
                    </Text>
                    <Text style={styles.descRodape}>
                        {this.state.feed.descricao}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaFeed: {

    },

    nomeUsuario: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000000',
        padding: 5
    },

    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,

    },

    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },

    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,

    },

    areaBtn: {
        flexDirection: 'row',
        padding: 5

    },

    iconelike: {
        width: 33,
        height: 33
    },

    btnSend: {
        paddingLeft: 5
    },

    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    descRodape: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000'
    },

    nomeRodape: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#000',
        paddingLeft: 5

    },

    likers: {
        fontWeight: "bold",
        marginLeft: 5,
    }
});

export default Lista;