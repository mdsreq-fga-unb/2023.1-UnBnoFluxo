package org.fluxosquad;

import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static class Subject {

        private final String code;
        private final String displayName;
        private final String nature;
        private final String alias;
        private final int period;

        public Subject(String code, String displayName, String nature, int period){
            this.code = code;
            this.displayName = displayName;
            this.nature = nature;
            this.period = period;
            StringBuilder stringBuilder = new StringBuilder();
            for (String s : displayName.split(" ")){
                try {
                    if(s.length() <= 1){
                        continue;
                    }
                    stringBuilder.append(s.charAt(0));
                } catch (Exception ignored){

                }
            }
            this.alias = stringBuilder.toString();
        }

    }


    public static void readNames(){
        Scanner scanner = new Scanner(System.in);
        List<Subject> subjects = new ArrayList<>();
        int period = 1;
        while (true){
            String line = scanner.nextLine().replaceAll("/","").replaceAll("\"","").replaceFirst("    ","");
            if(line.contains("º Nível")){
                period = Integer.parseInt(line.replace("º Nível","").replace(" ",""));
                System.out.println("PERIOD: " + period);
                continue;
            }
            if(line.contains("STOP")){
                break;
            }
            String[] split = line.split("\\|");
            String dataCourse = split[0];
            String[] fff = dataCourse.split(" ");
            String materiaCode = fff[0];
            System.out.println("FFF0 is " + materiaCode);
            String materiaName = String.join(" ",Arrays.copyOfRange(fff,1,fff.length));
            System.out.println(materiaName + " a a");
            System.out.println(materiaCode);
            String nature = split[1].split("DISCIPLINA   ")[1];

            Subject subject = new Subject(materiaCode, materiaName.split(" -")[0], nature, period);
            subjects.add(subject);
        }
        System.out.println(new Gson().toJson(subjects));
    }


    public static void main(String[] args){
        System.out.println("Init controller = RestAPI.");
        Server server = new Server();
        List<Curso> cursos = new ArrayList<>();
        cursos.add(new Curso("Engenharia Aeroespacial",8,"aero", """
                [{"code":"CIC0004","displayName":"ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES","nature":"OBRIGATORIO","alias":"APDC","period":1},{"code":"FGA0161","displayName":"ENGENHARIA E AMBIENTE","nature":"OBRIGATORIO","alias":"EA","period":1},{"code":"FGA0163","displayName":"INTRODUÇÃO À ENGENHARIA","nature":"OBRIGATORIO","alias":"IE","period":1},{"code":"FGA0168","displayName":"DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR","nature":"OBRIGATORIO","alias":"DIAPC","period":1},{"code":"MAT0025","displayName":"CÁLCULO 1","nature":"OBRIGATORIO","alias":"C","period":1},{"code":"FGA0157","displayName":"PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA","nature":"OBRIGATORIO","alias":"PEAE","period":2},{"code":"FGA0254","displayName":"CIÊNCIAS AEROESPACIAIS","nature":"OBRIGATORIO","alias":"CA","period":2},{"code":"IFD0171","displayName":"FISICA 1","nature":"OBRIGATORIO","alias":"F","period":2},{"code":"IFD0173","displayName":"FISICA 1 EXPERIMENTAL","nature":"OBRIGATORIO","alias":"FE","period":2},{"code":"MAT0026","displayName":"CÁLCULO 2","nature":"OBRIGATORIO","alias":"C","period":2},{"code":"MAT0031","displayName":"INTRODUCAO A ALGEBRA LINEAR","nature":"OBRIGATORIO","alias":"IAL","period":2},{"code":"FGA0008","displayName":"SISTEMAS AEROESPACIAIS","nature":"OBRIGATORIO","alias":"SA","period":3},{"code":"FGA0133","displayName":"ENGENHARIA ECONÔMICA","nature":"OBRIGATORIO","alias":"EE","period":3},{"code":"FGA0154","displayName":"MECANICA DOS SÓLIDOS 1 PARA ENGENHARIA","nature":"OBRIGATORIO","alias":"MDSPE","period":3},{"code":"FGA0160","displayName":"MÉTODOS NUMÉRICOS PARA ENGENHARIA","nature":"OBRIGATORIO","alias":"MNPE","period":3},{"code":"IQD0125","displayName":"QUIMICA GERAL TEORICA","nature":"OBRIGATORIO","alias":"QGT","period":3},{"code":"IQD0126","displayName":"QUIMICA GERAL EXPERIMENTAL","nature":"OBRIGATORIO","alias":"QGE","period":3},{"code":"MAT0027","displayName":"CÁLCULO 3","nature":"OBRIGATORIO","alias":"C","period":3},{"code":"ENM0080","displayName":"FENOMENOS DE TRANSPORTE","nature":"OBRIGATORIO","alias":"FDT","period":4},{"code":"FGA0102","displayName":"SINAIS E SISTEMAS PARA ENGENHARIA","nature":"OBRIGATORIO","alias":"SSPE","period":4},{"code":"FGA0150","displayName":"PROJETO INTEGRADOR DE ENGENHARIA 1","nature":"OBRIGATORIO","alias":"PIDE","period":4},{"code":"FGA0179","displayName":"MECANICA DOS SÓLIDOS 2 PARA ENGENHARIA","nature":"OBRIGATORIO","alias":"MDSPE","period":4},{"code":"ENM0068","displayName":"TERMODINAMICA 1","nature":"OBRIGATORIO","alias":"T","period":5},{"code":"FGA0075","displayName":"LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO","nature":"OBRIGATORIO","alias":"LDMDC","period":5},{"code":"FGA0078","displayName":"TEORIA DE MATERIAIS DE CONSTRUÇÃO","nature":"OBRIGATORIO","alias":"TDMDC","period":5},{"code":"FGA0086","displayName":"TEORIA DE ELETRICIDADE APLICADA","nature":"OBRIGATORIO","alias":"TDEA","period":5},{"code":"FGA0087","displayName":"LABORATÓRIO DE ELETRICIDADE APLICADA","nature":"OBRIGATORIO","alias":"LDEA","period":5},{"code":"FGA0119","displayName":"TEORIA DE ELETROMAGNETISMO","nature":"OBRIGATORIO","alias":"TDE","period":5},{"code":"FGA0120","displayName":"PRÁTICA DE ELETROMAGNETISMO","nature":"OBRIGATORIO","alias":"PDE","period":5},{"code":"FGA0204","displayName":"DINÂMICA DOS FLUÍDOS","nature":"OBRIGATORIO","alias":"DDF","period":5},{"code":"ENM0071","displayName":"TRANSFERENCIA DE CALOR","nature":"OBRIGATORIO","alias":"TDC","period":6},{"code":"FGA0038","displayName":"AERODINÂMICA DE SISTEMAS AEROESPACIAIS","nature":"OBRIGATORIO","alias":"ADSA","period":6},{"code":"FGA0164","displayName":"HUMANIDADES E CIDADANIA","nature":"OBRIGATORIO","alias":"HC","period":6},{"code":"FGA0184","displayName":"GESTÃO DA PRODUÇÃO E QUALIDADE","nature":"OBRIGATORIO","alias":"GDPQ","period":6},{"code":"FGA0197","displayName":"SISTEMAS DE CONTROLE","nature":"OBRIGATORIO","alias":"SDC","period":6},{"code":"FGA0039","displayName":"MECÂNICA DE ESTRUTURAS AEROESPACIAIS","nature":"OBRIGATORIO","alias":"MDEA","period":7},{"code":"FGA0043","displayName":"DINÂMICA DOS GASES PARA SISTEMAS AEROESPACIAIS","nature":"OBRIGATORIO","alias":"DDGPSA","period":7},{"code":"FGA0045","displayName":"MECÂNICA DO VÔO","nature":"OBRIGATORIO","alias":"MDV","period":7},{"code":"FGA0148","displayName":"ENGENHARIA DE SEGURANÇA DO TRABALHO","nature":"OBRIGATORIO","alias":"EDSDT","period":7},{"code":"FGA0048","displayName":"MECÂNICA DO VOO ESPACIAL","nature":"OBRIGATORIO","alias":"MDVE","period":8},{"code":"FGA0050","displayName":"DINÂMICA DE ESTRUTURAS AEROESPACIAIS","nature":"OBRIGATORIO","alias":"DDEA","period":8},{"code":"FGA0250","displayName":"PROJETO INTEGRADOR DE ENGENHARIA 2","nature":"OBRIGATORIO","alias":"PIDE","period":8},{"code":"FGA0009","displayName":"TRABALHO DE CONCLUSÃO DE CURSO 1","nature":"OBRIGATORIO","alias":"TDCDC","period":9},{"code":"FGA0021","displayName":"ESTÁGIO SUPERVISIONADO","nature":"OBRIGATORIO","alias":"ES","period":9},{"code":"FGA0011","displayName":"TRABALHO DE CONCLUSÃO DE CURSO 2","nature":"OBRIGATORIO","alias":"TDCDC","period":10}]
                """));
        cursos.add(new Curso("Engenharia de Software",10,"software", """
                [{"code":"FGA0161","displayName":"ENGENHARIA E AMBIENTE","nature":"OBRIGATORIO","alias":"EA","period":1},{"code":"FGA0163","displayName":"INTRODUÇÃO À ENGENHARIA","nature":"OBRIGATORIO","alias":"IE","period":1},{"code":"FGA0168","displayName":"DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR","nature":"OBRIGATORIO","alias":"DIAPC","period":1},{"code":"MAT0025","displayName":"CÁLCULO 1","nature":"OBRIGATORIO","alias":"C","period":1},{"code":"CIC0004","displayName":"ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES","nature":"OPTATIVO","alias":"APDC","period":1},{"code":"FGA0157","displayName":"PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA","nature":"OBRIGATORIO","alias":"PEAE","period":2},{"code":"IFD0171","displayName":"FISICA 1","nature":"OBRIGATORIO","alias":"F","period":2},{"code":"IFD0173","displayName":"FISICA 1 EXPERIMENTAL","nature":"OBRIGATORIO","alias":"FE","period":2},{"code":"MAT0026","displayName":"CÁLCULO 2","nature":"OBRIGATORIO","alias":"C","period":2},{"code":"MAT0031","displayName":"INTRODUCAO A ALGEBRA LINEAR","nature":"OBRIGATORIO","alias":"IAL","period":2},{"code":"FGA0084","displayName":"DESENVOLVIMENTO DE SOFTWARE","nature":"OPTATIVO","alias":"DDS","period":2},{"code":"FGA0133","displayName":"ENGENHARIA ECONÔMICA","nature":"OBRIGATORIO","alias":"EE","period":3},{"code":"FGA0158","displayName":"ORIENTAÇÃO A OBJETOS","nature":"OBRIGATORIO","alias":"OO","period":3},{"code":"FGA0160","displayName":"MÉTODOS NUMÉRICOS PARA ENGENHARIA","nature":"OBRIGATORIO","alias":"MNPE","period":3},{"code":"FGA0164","displayName":"HUMANIDADES E CIDADANIA","nature":"OBRIGATORIO","alias":"HC","period":3},{"code":"FGA0071","displayName":"PRÁTICA DE ELETRÔNICA DIGITAL 1","nature":"OPTATIVO","alias":"PDED","period":3},{"code":"FGA0073","displayName":"TEORIA DE ELETRÔNICA DIGITAL 1","nature":"OPTATIVO","alias":"TDED","period":3},{"code":"FGA0085","displayName":"MATEMÁTICA DISCRETA 1","nature":"OPTATIVO","alias":"MD","period":3},{"code":"FGA0108","displayName":"MATEMÁTICA DISCRETA 2","nature":"OBRIGATORIO","alias":"MD","period":4},{"code":"FGA0138","displayName":"MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE","nature":"OBRIGATORIO","alias":"MDDDS","period":4},{"code":"FUNDAMENTOS","displayName":"DE ARQUITETURA DE COMPUTADORES","nature":"OBRIGATORIO","alias":"DADC","period":4},{"code":"FGA0147","displayName":"ESTRUTURA DE DADOS E ALGORITMOS","nature":"OBRIGATORIO","alias":"EDDA","period":4},{"code":"FGA0150","displayName":"PROJETO INTEGRADOR DE ENGENHARIA 1","nature":"OBRIGATORIO","alias":"PIDE","period":4},{"code":"FGA0184","displayName":"GESTÃO DA PRODUÇÃO E QUALIDADE","nature":"OBRIGATORIO","alias":"GDPQ","period":4},{"code":"FGA0003","displayName":"COMPILADORES 1","nature":"OBRIGATORIO","alias":"C","period":5},{"code":"FGA0030","displayName":"ESTRUTURAS DE DADOS 2","nature":"OBRIGATORIO","alias":"EDD","period":5},{"code":"FGA0137","displayName":"SISTEMAS DE BANCO DE DADOS 1","nature":"OBRIGATORIO","alias":"SDBDD","period":5},{"code":"FGA0170","displayName":"FUNDAMENTOS DE SISTEMAS OPERACIONAIS","nature":"OBRIGATORIO","alias":"FDSO","period":5},{"code":"FGA0172","displayName":"REQUISITOS DE SOFTWARE","nature":"OBRIGATORIO","alias":"RDS","period":5},{"code":"FGA0173","displayName":"INTERAÇÃO HUMANO COMPUTADOR","nature":"OBRIGATORIO","alias":"IHC","period":5},{"code":"FGA0060","displayName":"SISTEMAS DE BANCO DE DADOS 2","nature":"OBRIGATORIO","alias":"SDBDD","period":6},{"code":"FGA0208","displayName":"ARQUITETURA E DESENHO DE SOFTWARE","nature":"OBRIGATORIO","alias":"ADDS","period":6},{"code":"FGA0211","displayName":"FUNDAMENTOS DE REDES DE COMPUTADORES","nature":"OBRIGATORIO","alias":"FDRDC","period":6},{"code":"FGA0238","displayName":"TESTES DE SOFTWARE","nature":"OBRIGATORIO","alias":"TDS","period":6},{"code":"FGA0278","displayName":"QUALIDADE DE SOFTWARE 1","nature":"OBRIGATORIO","alias":"QDS","period":6},{"code":"FGA0124","displayName":"PROJETO DE ALGORITMOS","nature":"OPTATIVO","alias":"PDA","period":6},{"code":"FGA0109","displayName":"FUNDAMENTOS DE SISTEMAS EMBARCADOS","nature":"OBRIGATORIO","alias":"FDSE","period":7},{"code":"FGA0210","displayName":"PARADIGMAS DE PROGRAMAÇÃO","nature":"OBRIGATORIO","alias":"PDP","period":7},{"code":"FGA0244","displayName":"PROGRAMAÇÃO PARA SISTEMAS PARALELOS E DISTRIBUIDOS","nature":"OBRIGATORIO","alias":"PPSPD","period":7},{"code":"FGA0112","displayName":"QUALIDADE DE SOFTWARE 2","nature":"OPTATIVO","alias":"QDS","period":7},{"code":"FGA0115","displayName":"INFORMAÇÃO, COMUNICAÇÃO E A SOCIEDADE DO CONHECIMENTOS","nature":"OPTATIVO","alias":"ICSDC","period":7},{"code":"FGA0242","displayName":"TÉCNICAS DE PROGRAMAÇÃO EM PLATAFORMAS EMERGENTES","nature":"OPTATIVO","alias":"TDPEPE","period":7},{"code":"FGA0021","displayName":"ESTÁGIO SUPERVISIONADO","nature":"OBRIGATORIO","alias":"ES","period":8},{"code":"FGA0206","displayName":"ENGENHARIA DE PRODUTO DE SOFTWARE","nature":"OBRIGATORIO","alias":"EDPDS","period":8},{"code":"FGA0240","displayName":"GERÊNCIA DE CONFIGURAÇÃO E EVOLUÇÃO DE SOFTWARE","nature":"OBRIGATORIO","alias":"GDCEDS","period":8},{"code":"FGA0113","displayName":"FÍSICA PARA JOGOS ELETRÔNICOS 1","nature":"OPTATIVO","alias":"FPJE","period":8},{"code":"FGA0009","displayName":"TRABALHO DE CONCLUSÃO DE CURSO 1","nature":"OBRIGATORIO","alias":"TDCDC","period":9},{"code":"FGA0250","displayName":"PROJETO INTEGRADOR DE ENGENHARIA 2","nature":"OBRIGATORIO","alias":"PIDE","period":9},{"code":"FGA0083","displayName":"APRENDIZADO DE MÁQUINA","nature":"OPTATIVO","alias":"ADM","period":9},{"code":"FGA0111","displayName":"INTRODUÇÃO À WEB SEMÂNTICA","nature":"OPTATIVO","alias":"IWS","period":9},{"code":"FGA0114","displayName":"FÍSICA PARA JOGOS ELETRÔNICOS 2","nature":"OPTATIVO","alias":"FPJE","period":9},{"code":"FGA0011","displayName":"TRABALHO DE CONCLUSÃO DE CURSO 2","nature":"OBRIGATORIO","alias":"TDCDC","period":10},{"code":"FGA0110","displayName":"COMPILADORES 2","nature":"OPTATIVO","alias":"C","period":10},{"code":"FGA0273","displayName":"MELHORIA DE PROCESSOS DE SOFTWARE","nature":"OPTATIVO","alias":"MDPDS","period":10}]
                """));


//        cursos.add(new Curso("Engenharia Eletrônica",10,"electronic", allSubjects));
//        cursos.add(new Curso("Engenharia de Energia",10,"energy", allSubjects));
//        cursos.add(new Curso("Engenharia Automotiva",10,"auto", allSubjects));

        Thread thread = new Thread(()->{

            try(Scanner scanner = new Scanner(System.in)) {
                while (true) {
                    String line = scanner.nextLine();
                    System.out.println(line);
                }
            }

        });
        thread.setPriority(Thread.MIN_PRIORITY);
        thread.setDaemon(true);
        thread.start();
        server.start(cursos);
        Client client = new Client();
        client.testRequest();
    }

}