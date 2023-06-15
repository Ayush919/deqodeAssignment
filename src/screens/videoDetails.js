import {Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {Video} from 'expo-av';
import {StyleSheet} from "react-native";
import backButton from '../assets/rightArrow.png'
import downloadIcon from '../assets/downloadIcon.png'
import {useNavigation} from "@react-navigation/native";

const VideoDetails = ({route}) => {
    const data = route.params.data
    const navigation = useNavigation();
    console.log("fata :::: ", data.thumbnailUrl)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.HeaderSection}>
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>navigation.goBack()}>
                    <Image source={backButton}
                           style={{width: 30, height: 20, transform: [{rotate: '180deg'}], tintColor: 'blue'}}/>
                    <Text style={styles.headerText}>Videos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Text style={styles.headerText}>Download Video</Text>
                    <Image source={downloadIcon}
                           style={{width: 30, height: 20, tintColor: 'blue', marginLeft:5}}/>
                </TouchableOpacity>
            </View>
            <View style={{borderRadius: 10, overflow: 'hidden'}}>
                <Video
                    source={{uri: data.videoUrl}}
                    style={{width: 300, height: 200}}
                    useNativeControls
                    resizeMode="contain"
                />
            </View>
            <View style={styles.videoDescriptionSection}>
                <Text style={styles.videoTitle}>{data.title}</Text>
                <Text>{data.description}</Text>
            </View>
        </SafeAreaView>
    )
}
export default VideoDetails

let styles = StyleSheet.create({
    HeaderSection: {
        width: '98%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    headerText: {
        color: 'blue'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 20,
        width: '100%'
    },
    videoPlayer: {
        width: '100%',
        height: 300,
    },
    videoDescriptionSection: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    videoTitle: {
        width: "80%",
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center'
    },
    // videoDescription:{
    //     width:"85%",
    //     marginVertical: 10,
    // }
});
