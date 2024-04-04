import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, Text, View ,Image, TouchableOpacity} from "react-native"
import * as Icon from 'react-native-feather';
import { themeColors } from "../themes";
import SubjectList from "../components/subjectList";
const CollegeScreen=()=>{
   const {params} =useRoute();
   const navigation = useNavigation()
   const YearRelatedData= params 
   return(<View>
      <View className="relative"> 
            <Image className="w-full h-56" source={{uri:YearRelatedData.YearImage}}/>
            <TouchableOpacity  onPress={()=>{
               navigation.goBack()
            }} className="absolute top-10 left-2 bg-gray-50 p-2 rounded-full shadow">
               <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}/>
            </TouchableOpacity>
      </View>
         <View style={{borderTopLeftRadius:40,borderTopRightRadius:40}} className="bg-white -mt-8 pt-0">
            <View className="px-5">
               <Text className ="text-2xl font-bold text-center mt-0 ">{YearRelatedData.YearName}</Text>
            </View>
         </View>
      <ScrollView>
         <View className="pb-72 bg-neutral-50">   
            <Text className="px-3 py-4 text-xl font-bold">Odd Semister</Text>
            {
               YearRelatedData.subjects.map(subjectdata=>{
                  if(subjectdata.subjectSem==="odd"){
                     return(<SubjectList subjectRelatedData={subjectdata}/>)
                  }
               })
            }
            <Text className="px-3 py-4 text-xl font-bold">Even Semister</Text>
            {
               YearRelatedData.subjects.map(subjectdata=>{
                  if(subjectdata.subjectSem==="even"){
                     return(<SubjectList subjectRelatedData={subjectdata}/>)
                  }
               })
            }
         </View>
      </ScrollView>

   </View>) 
}
export default CollegeScreen;