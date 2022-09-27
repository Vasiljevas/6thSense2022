import general from "./general.json";
import faq from "./faq.json";
import synbio from "./synbio.json";
import antibiotic from "./antibiotic.json";
import translation from "./translation.json";
import crispr from "./crispr.json";
import dna from "./dna.json";
import virus from "./virus.json";
import rna from "./rna.json";
import vaccines from "./vaccines.json";
import bioit from "./bioit.json";
import gmo from "./gmo.json";
import biobrick from "./biobrick.json";
import circuit from "./circuit.json";
import ecoli from "./ecoli.json";
import gfp from "./gfp.json";
import nano from "./nano.json";
import sequencing from "./sequencing.json";
import transformation from "./transformation.json";
import gfp1 from "./gfp1.json";
import transformationElectroporation from "./transformation_electroporation.json";

const en = {
  ...general,
  ...faq,
  ...synbio,
  ...antibiotic,
  ...translation,
  ...crispr,
  ...dna,
  ...virus,
  ...rna,
  ...vaccines,
  ...bioit,
  ...gmo,
  ...biobrick,
  ...circuit,
  ...ecoli,
  ...gfp,
  ...nano,
  ...sequencing,
  ...transformation,
  ...gfp1,
  ...transformationElectroporation,
};

export default en;
