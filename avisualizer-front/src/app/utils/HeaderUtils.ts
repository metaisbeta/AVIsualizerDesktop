import * as d3 from "d3";
import { svg } from "d3";

export class HeaderUtils{
  
	public static setSystemViewHeader(root:string){
		HeaderUtils.packageInfoUpdate("");
		HeaderUtils.classInfoUpdate("");
		HeaderUtils.elementInfoUpdate("");
		HeaderUtils.viewInfoUpdate("System");
		var title = d3.select("#header").attr("view")+" View"+": Project "+String(root)+"/";
    		d3.select("#header").select("h2").text(title);
	}	
	public static setPackageViewHeader(view:string,pacote:string,root:string){
		HeaderUtils.packageInfoUpdate(pacote);
		
		HeaderUtils.viewInfoUpdate(view);
		var title = d3.select("#header").attr("view")+" View"+": Project "+String(root)+"/"+d3.select("#header").attr("package")+"/";
    		d3.select("#header").select("h2").text(title);
	}
	public static setClassViewHeader(view:string,classe:string,pacote:string,root:string){
		HeaderUtils.classInfoUpdate(classe);
		HeaderUtils.viewInfoUpdate(view);
		HeaderUtils.packageInfoUpdate(pacote);
		var title = d3.select("#header").attr("view")+" View"+": Project "+String(root)+"/"+d3.select("#header").attr("package")+"/"+d3.select("#header").attr("class")+"/";
    		d3.select("#header").select("h2").text(title);
	}

	public static viewInfoUpdate(view:string){
		d3.select("#header").attr("view",view)
	}
  	public static packageInfoUpdate(pacote:string){
		d3.select("#header").attr("package",pacote)
	}
	public static classInfoUpdate(classe:string){
		d3.select("#header").attr("class",classe)
	}
	public static elementInfoUpdate(element:string){
		d3.select("#header").attr("element",element)	
	}
}