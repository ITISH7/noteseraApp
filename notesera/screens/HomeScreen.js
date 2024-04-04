import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import * as Icon from 'react-native-feather';
import { themeColors } from "../themes";
import Category from "../components/Category";
import image from "../assets/Images/back2.jpg"
import FeaturedCollege from "../components/FeaturedCollege";
import { useNavigation } from "@react-navigation/native";
import { allcollegeData } from "../data/Data";
const HomeScreen = () => {
  const navigate = useNavigation()
  return (
    <SafeAreaView style={style.container} className="bg-white">
      <StatusBar />
      {/* searchbar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        {/* search icon */}
        <View className='flex-row flex-1 items-center p-3 rounded-full border border-gray-300'>
            <Icon.Search height={30} width={30} stroke={"black"}></Icon.Search> 
            <TextInput placeholder="Search your College here ..." className="ml-2 flex-1"></TextInput>
            <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
              <Icon.MapPin height={20} width={20}stroke={"gray"}></Icon.MapPin>
              <Text className="text-gray-600">Indore,India</Text>
            </View>
        </View>
        {/* menu -list  */}
        <View  style={{backgroundColor:themeColors.bgColor(1)}}className="p-3 rounded-full"><Icon.Menu height={20} width={20} strokeWidth={2.5} stroke={"white"}></Icon.Menu></View>
      </View>

      {/* main sectioon starts */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        paddingBottom:20
      }}>
        <Category/>
        {allcollegeData.map(Collegedata=>{
          return(<FeaturedCollege
            title={Collegedata.collegeName}
            description={Collegedata.collegeDescription}
            collegeRelatedData ={Collegedata}/>
            )
        })}
        
      </ScrollView>
    </SafeAreaView>

  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 20,
  },
});
export default HomeScreen;
