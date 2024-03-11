import React, { useState } from 'react';
import './skillsComponent.css'
import { FaReact, FaHtml5, FaCss3Alt, FaVuejs, FaJsSquare, FaJenkins, FaGitAlt, FaPython} from 'react-icons/fa';
import { FaJava, FaNetworkWired } from 'react-icons/fa';
import { SiDjango, SiMongodb, SiKubernetes, SiYaml, SiGithubactions, SiTerraform, SiMysql, SiApachehadoop, SiPowerbi }  from "react-icons/si";
import { SiAmazonec2, SiAmazonrds, SiAmazondynamodb, SiAmazonsqs, SiAwslambda, SiAmazonecs, SiAmazoneks, SiAwsfargate, SiAmazons3  } from "react-icons/si";
import { SiAmazonsimpleemailservice, SiAmazonroute53, SiAmazonredshift, SiAmazoncloudwatch, SiAmazonapigateway} from "react-icons/si";

import { BiLogoFlask, BiLogoPostgresql} from "react-icons/bi";
import { DiSpark } from "react-icons/di";
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3 } from "react-icons/tb";
import { GrDocker } from "react-icons/gr";







const Skills = () => {
  const [selectedContainer, setSelectedContainer] = useState('frontend'); // Defina o estado inicial como 'frontend'

  const handleIconClick = (container) => {
    setSelectedContainer(container);
  };

  return (
    <div className="skills-container">
      <div className="container-skills">
        <h1>Skills Set</h1>
      </div>
      <div>
        {(selectedContainer === 'frontend' || selectedContainer === 'backend') && (
          <>
            <Frontend />
            <Backend />
          </>
        )}
        {(selectedContainer === 'devops' || selectedContainer === 'datascience') && (
          <>
            <DevOps />
            <DataScience />
          </>
        )}
        {selectedContainer === 'aws' && <AWSCloud />}
        {selectedContainer === 'others' && <OthersTools />}
      </div>
      <div className="icons-navigation">
        <TbHexagonNumber1 className="one-filter" onClick={() => handleIconClick('frontend')} />
        <TbHexagonNumber2 className="two-filter" onClick={() => handleIconClick('devops')} />
        <TbHexagonNumber3 className="three-filter" onClick={() => handleIconClick('aws')} />
      </div>
    </div>
  );
};

export default Skills;




const Frontend = () => {
  return (
    <div className='container-frontend'>
      <h1>Frontend</h1>
      <div className="frontend-icons">
        <div className="icon-with-nivel react">
          <FaReact className="react-icon" />
          <NivelExperiencia nivel={3} prefix="frontend" />
          <span className="nivel-text">Intermediário</span>
        </div>
        <div className="icon-with-nivel-html">
          <FaHtml5 className="html-icon" />
          <NivelExperiencia nivel={3} prefix="frontend" />
          <span className="nivel-text-html">Intermediário</span>
        </div>
        <div className="icon-with-nivel-css">
          <FaCss3Alt className="css-icon" />
          <NivelExperiencia nivel={3} prefix="frontend" />
          <span className="nivel-text-css">Intermediário</span>
        </div>
        <div className="icon-with-nivel-vue">
          <FaVuejs className="vue-icon" />
          <NivelExperiencia nivel={3} prefix="frontend" />
          <span className="nivel-text">Intermediário</span>
        </div>
        <div className="icon-with-nivel-js">
          <FaJsSquare className="js-icon" />
          <NivelExperiencia nivel={3} prefix="frontend" />
          <span className="nivel-text-js">Intermediário</span>
        </div>
      </div>
    </div>
  );
}


const NivelExperiencia = ({ nivel }) => {
  const renderBolinhas = () => {
    const bolinhas = [];

    for (let i = 1; i <= 4; i++) {
      if (i <= nivel) {
        bolinhas.push(<div key={i} className={`bolinha marcada`} />);
      } else {
        bolinhas.push(<div key={i} className={`bolinha`} />);
      }
    }

    return bolinhas;
  };

  return (
    <div className={`nivel-experiencia`}>
      {renderBolinhas()}
    </div>
  );
};


const Backend = () => {
  return (
    <div className='container-backend'>
      <h1>Backend</h1>
      <div className="backend-icons">
        <div className="icon-with-nivel-java">
          <FaJava className="java-icon" />
          <NivelExperienciaBackend nivel={1} prefix="backend-java" />
          <span className="nivel-text-java">Introdutório</span>
        </div>
        <div className="icon-with-nivel-flask">
          <BiLogoFlask className="flask-icon" />
          <NivelExperienciaBackend nivel={1} prefix="backend-flask" />
          <span className="nivel-text-flask">Introdutório</span>
        </div>
        <div className="icon-with-nivel-django">
          <SiDjango className="django-icon" />
          <NivelExperienciaBackend nivel={1} prefix="backend-django" />
          <span className="nivel-text-django">Introdutório</span>
        </div>
        <div className="icon-with-nivel-mongodb">
          <SiMongodb className="mongodb-icon" />
          <NivelExperienciaBackend nivel={1} prefix="backend-mongodb" />
          <span className="nivel-text-mongodb">Introdutório</span>
        </div>
      </div>
    </div>
  );
}

const NivelExperienciaBackend = ({ nivel, prefix }) => {
  const renderBolinhas = () => {
    const bolinhas = [];

    for (let i = 1; i <= 4; i++) {
      if (i <= nivel) {
        bolinhas.push(<div key={i} className={`bolinha marcada ${prefix}-bolinha-marcada`} />);
      } else {
        bolinhas.push(<div key={i} className={`bolinha ${prefix}-bolinha`} />);
      }
    }

    return bolinhas;
  };

  return (
    <div className={`nivel-experiencia ${prefix}-nivel-experiencia`}>
      {renderBolinhas()}
    </div>
  );
};

const DevOps = () => {
  return (
    <div className='container-devops'>
      <h1>DevOps</h1>
      <div className="devops-icons">
        <div className="icon-with-nivel-aws">
        <SiKubernetes className="kubernetes-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-kubernetes" />
          <span className="nivel-text-kubernetes">Intermediário</span>
        </div>
        <div className="icon-with-nivel-docker">
        <GrDocker className="docker-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-docker" />
          <span className="nivel-text-docker">Intermediário</span>
        </div>
        <div className="icon-with-nivel-yaml">
          <SiYaml className="yaml-icon" />
          <NivelExperienciaBackend nivel={3} prefix="backend-yaml" />
          <span className="nivel-text-yaml">Intermediário</span>
        </div>
        <div className="icon-with-nivel-github-actions">
          <SiGithubactions className="github-actions-icon" />
          <NivelExperienciaBackend nivel={3} prefix="backend-github-actions" />
          <span className="nivel-text-github-actions">Intermediário</span>
        </div>
        <div className="icon-with-nivel-terraform">
          <SiTerraform className="terraform-icon" />
          <NivelExperienciaBackend nivel={3} prefix="backend-terraform" />
          <span className="nivel-text-terraform">Intermediário</span>
        </div>
        <div className="icon-with-nivel-jenkins">
          <FaJenkins className="jenkins-icon" />
          <NivelExperienciaBackend nivel={2} prefix="backend-jenkins" />
          <span className="nivel-text-jenkins">Básico</span>
        </div>
        <div className="icon-with-nivel-git">
          <FaGitAlt className="git-icon" />
          <NivelExperienciaBackend nivel={3} prefix="backend-git" />
          <span className="nivel-text-git">Intermediário</span>
        </div>
      </div>
    </div>
  );
}

const DataScience = () => {

  return (
    <div className='container-data-science'>
      <h1>Data Science</h1>
    <div className="data-science-icons">
      <div className="icon-with-nivel-python">
        <FaPython className="python-icon" />
        <NivelExperienciaBackend nivel={4} prefix="backend-python" />
        <span className="nivel-text-python">Avançado</span>
      </div>
      <div className="icon-with-nivel-spark">
        <DiSpark className="spark-icon" />
        <NivelExperienciaBackend nivel={2} prefix="backend-spark" />
        <span className="nivel-text-spark">Básico</span>
      </div>
      <div className="icon-with-nivel-mysql">
        <SiMysql className="mysql-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-mysql" />
        <span className="nivel-text-mysql">Intermediário</span>
      </div>
      <div className="icon-with-nivel-apache-hadoop">
        <SiApachehadoop className="apache-hadoop-icon" />
        <NivelExperienciaBackend nivel={2} prefix="backend-hadoop" />
        <span className="nivel-text-apache-hadoop">Básico</span>
      </div>
      <div className="icon-with-nivel-postgresql">
        <BiLogoPostgresql className="postgresql-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-postgresql" />
        <span className="nivel-text-postgresql">Intermediário</span>
      </div>
      <div className="icon-with-nivel-powerbi">
        <SiPowerbi  className="powerbi-icon" />
        <NivelExperienciaBackend nivel={2} prefix="backend-powerbi" />
        <span className="nivel-text-powerbi">Básico</span>
      </div>

    </div>
    </div>


  )
}

const AWSCloud = () => {

  return (

    <div className='container-aws-cloud'>
      <h1>AWS Cloud</h1>
      <div className="aws-cloud-icons">
      <div className="icon-with-nivel-ec2-">
        < SiAmazonec2 className="ec2-icon" />
        <span className="nivel-text-ec2"></span>
      </div>
      <div className="icon-with-nivel-s3-">
        <  SiAmazons3 className="s3-icon" />
        <span className="nivel-text-s3"></span>
      </div>
      <div className="icon-with-nivel-rds">
        <   SiAmazonrds className="rds-icon" />
        <span className="nivel-text-rds"></span>
      </div>
      <div className="icon-with-nivel-dynamodb">
        <   SiAmazondynamodb className="dynamodb-icon" />
        <span className="nivel-text-dynamodb"></span>
      </div>
      <div className="icon-with-nivel-sqs">
        <   SiAmazonsqs className="sqs-icon" />
        <span className="nivel-text-sqs"></span>
      </div>
      <div className="icon-with-nivel-lambda">
        <   SiAwslambda  className="lambda-icon" />
        <span className="nivel-text-lambda"></span>
      </div>
      <div className="icon-with-nivel-ecs">
        <   SiAmazonecs className="ecs-icon" />
        <span className="nivel-text-ecs"></span>
      </div>
      <div className="icon-with-nivel-eks">
        <   SiAmazoneks className="eks-icon" />
        <span className="nivel-text-eks"></span>
      </div>
    </div>
    <div className="icon-with-nivel-eks">
        <   SiAmazoneks className="eks-icon" />
        <span className="nivel-text-eks"></span>
    </div>
    <div className="icon-with-nivel-fargate">
        <   SiAwsfargate className="fargate-icon" />
        <span className="nivel-text-fargate"></span>
    </div>
    <div className="icon-with-nivel-vpc">
        <   FaNetworkWired className="vpc-icon" />
        <span className="nivel-text-vpc"></span>
    </div>
    <div className="icon-with-nivel-sns">
        <   SiAmazonsimpleemailservice className="sns-icon" />
        <span className="nivel-text-sns"></span>
    </div>
    <div className="icon-with-nivel-Route53">
        <   SiAmazonroute53 className="Route53-icon" />
        <span className="nivel-text-Route53"></span>
    </div>
    <div className="icon-with-nivel-redshift">
        <   SiAmazonredshift className="redshift-icon" />
        <span className="nivel-text-redshift"></span>
    </div>
    <div className="icon-with-nivel-apigateway">
        <   SiAmazonapigateway className="apigateway-icon" />
        <span className="nivel-text-apigateway"></span>
    </div>
    <div className="icon-with-nivel-cloudwatch">
        <   SiAmazoncloudwatch className="cloudwatch-icon" />
        <span className="nivel-text-cloudwatch"></span>
    </div>
    </div>
  )
}

const OthersTools = () => {

  return (

    <div className='container-others-tools'>
      <h1>Other Tools</h1>
      <div className="aws-others-tools-icon">
    </div>
    </div>
  )
}
