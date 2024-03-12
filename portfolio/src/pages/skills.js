import React, { useState } from 'react';
import './skillsComponent.css'
import { FaReact, FaHtml5, FaCss3Alt, FaVuejs, FaJsSquare, FaJenkins, FaGitAlt, FaPython, FaLinux } from 'react-icons/fa';
import { FaNetworkWired, FaNodeJs  } from 'react-icons/fa';
import { SiDjango, SiMongodb, SiKubernetes, SiYaml, SiGithubactions, SiTerraform, SiMysql, SiApachehadoop, SiPowerbi, SiGnubash  }  from "react-icons/si";
import { SiAmazonec2, SiAmazonrds, SiAmazondynamodb, SiAmazonsqs, SiAwslambda, SiAmazonecs, SiAmazoneks, SiAwsfargate, SiAmazons3  } from "react-icons/si";
import { SiAmazonsimpleemailservice, SiAmazonroute53, SiAmazonredshift, SiAmazoncloudwatch, SiAmazonapigateway, SiAmazoniam, SiApachecassandra  } from "react-icons/si";
import { BiLogoFlask, BiLogoPostgresql} from "react-icons/bi";
import { DiSpark } from "react-icons/di";
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3 } from "react-icons/tb";
import { GrDocker, GrOracle  } from "react-icons/gr";
import { IoHelpCircle } from "react-icons/io5";









const Skills = () => {
  const [selectedContainer, setSelectedContainer] = useState('frontend');

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
        {(selectedContainer === 'aws' || selectedContainer === 'others') && (
          <>
            <AWSCloud />
            <OthersTools />
          </>
        )}
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
        <div className="icon-with-nivel react" title="React">
          <FaReact className="react-icon" />
          <NivelExperiencia nivel={2} prefix="frontend" />
          <span className="nivel-text">Básico</span>
        </div>
        <div className="icon-with-nivel-html" title="HTML">
          <FaHtml5 className="html-icon" />
          <NivelExperiencia nivel={3} prefix="frontend" />
          <span className="nivel-text-html">Intermediário</span>
        </div>
        <div className="icon-with-nivel-css" title="CSS">
          <FaCss3Alt className="css-icon" />
          <NivelExperiencia nivel={3} prefix="frontend" />
          <span className="nivel-text-css">Intermediário</span>
        </div>
        <div className="icon-with-nivel-vue" title="Vue">
          <FaVuejs className="vue-icon" />
          <NivelExperiencia nivel={2} prefix="frontend" />
          <span className="nivel-text">Básico</span>
        </div>
        <div className="icon-with-nivel-js" title="JavaScript">
          <FaJsSquare className="js-icon" />
          <NivelExperiencia nivel={2} prefix="frontend" />
          <span className="nivel-text-js">Básico</span>
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
        <div className="icon-with-nivel-node" title="Node.js">
          <FaNodeJs  className="node-icon" />
          <NivelExperienciaBackend nivel={1} prefix="backend-node" />
          <span className="nivel-text-node">Introdutório</span>
        </div>
        <div className="icon-with-nivel-flask" title="Flask">
          <BiLogoFlask className="flask-icon" />
          <NivelExperienciaBackend nivel={1} prefix="backend-flask" />
          <span className="nivel-text-flask">Introdutório</span>
        </div>
        <div className="icon-with-nivel-django" title="Django">
          <SiDjango className="django-icon" />
          <NivelExperienciaBackend nivel={1} prefix="backend-django" />
          <span className="nivel-text-django">Introdutório</span>
        </div>
        <div className="icon-with-nivel-mongodb" title="MongoDB">
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
        <div className="icon-with-nivel-aws" title="Kubernetes">
          <SiKubernetes className="kubernetes-icon" />
          <NivelExperienciaBackend nivel={3} prefix="backend-kubernetes" />
          <span className="nivel-text-kubernetes">Intermediário</span>
        </div>
        <div className="icon-with-nivel-docker" title="Docker">
          <GrDocker className="docker-icon" />
          <NivelExperienciaBackend nivel={3} prefix="backend-docker" />
          <span className="nivel-text-docker">Intermediário</span>
        </div>
        <div className="icon-with-nivel-yaml" title="YAML">
          <SiYaml className="yaml-icon" />
          <NivelExperienciaBackend nivel={3} prefix="backend-yaml" />
          <span className="nivel-text-yaml">Intermediário</span>
        </div>
        <div className="icon-with-nivel-github-actions" title="GitHub Actions">
          <SiGithubactions className="github-actions-icon" />
          <NivelExperienciaBackend nivel={3} prefix="backend-github-actions" />
          <span className="nivel-text-github-actions">Intermediário</span>
        </div>
        <div className="icon-with-nivel-terraform" title="Terraform">
          <SiTerraform className="terraform-icon" />
          <NivelExperienciaBackend nivel={2} prefix="backend-terraform" />
          <span className="nivel-text-terraform">Básico</span>
        </div>
        <div className="icon-with-nivel-jenkins" title="Jenkins">
          <FaJenkins className="jenkins-icon" />
          <NivelExperienciaBackend nivel={2} prefix="backend-jenkins" />
          <span className="nivel-text-jenkins">Básico</span>
        </div>
        <div className="icon-with-nivel-git" title="Git">
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
        <div className="icon-with-nivel-python" title="Python">
          <FaPython className="python-icon" />
          <NivelExperienciaBackend nivel={4} prefix="backend-python" />
          <span className="nivel-text-python">Avançado</span>
        </div>
        <div className="icon-with-nivel-spark" title="Spark">
          <DiSpark className="spark-icon" />
          <NivelExperienciaBackend nivel={2} prefix="backend-spark" />
          <span className="nivel-text-spark">Básico</span>
        </div>
        <div className="icon-with-nivel-mysql" title="MySQL">
          <SiMysql className="mysql-icon" />
          <NivelExperienciaBackend nivel={3} prefix="backend-mysql" />
          <span className="nivel-text-mysql">Intermediário</span>
        </div>
        <div className="icon-with-nivel-apache-hadoop" title="Apache Hadoop">
          <SiApachehadoop className="apache-hadoop-icon" />
          <NivelExperienciaBackend nivel={2} prefix="backend-hadoop" />
          <span className="nivel-text-apache-hadoop">Básico</span>
        </div>
        <div className="icon-with-nivel-postgresql" title="PostgreSQL">
          <BiLogoPostgresql className="postgresql-icon" />
          <NivelExperienciaBackend nivel={3} prefix="backend-postgresql" />
          <span className="nivel-text-postgresql">Intermediário</span>
        </div>
        <div className="icon-with-nivel-powerbi" title="Power BI">
          <SiPowerbi  className="powerbi-icon" />
          <NivelExperienciaBackend nivel={2} prefix="backend-powerbi" />
          <span className="nivel-text-powerbi">Básico</span>
        </div>
      </div>
    </div>
  );
}


const AWSCloud = () => {

  return (

    <div className='container-aws-cloud'>
      <h1>AWS Cloud</h1>
      <div className="aws-cloud-icons">
      <div className="icon-with-nivel-ec2-" title='EC2'>
        < SiAmazonec2 className="ec2-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-ec2" />
        <span className="nivel-text-ec2">Intermediário</span>
      </div>
      <div className="icon-with-nivel-s3-" title='S3'>
        <  SiAmazons3 className="s3-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-s3" />
        <span className="nivel-text-s3">Intermediário</span>
      </div>
      <div className="icon-with-nivel-rds" title='RDS'>
        <   SiAmazonrds className="rds-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-rds" />
        <span className="nivel-text-rds">Intermediário</span>
      </div>
      <div className="icon-with-nivel-dynamodb" title='DynamoDB'>
        <   SiAmazondynamodb className="dynamodb-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-dynamodb" />
        <span className="nivel-text-dynamodb">Intermediário</span>
      </div>
      <div className="icon-with-nivel-sqs" title='Amazon SQS'>
        <   SiAmazonsqs className="sqs-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-sqs" />
        <span className="nivel-text-sqs">Intermediário</span>
      </div>
      <div className="icon-with-nivel-lambda" title='AWS Lambda'>
        <   SiAwslambda className="lambda-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-lambda" />
        <span className="nivel-text-lambda">Intermediário</span>
      </div>
      <div className="icon-with-nivel-ecs" title='ECS'>
        <   SiAmazonecs className="ecs-icon" />
        <NivelExperienciaBackend nivel={2} prefix="backend-ecs" />
        <span className="nivel-text-ecs">Básico</span>
      </div>
    </div>
    <div className="icon-with-nivel-eks" title='EKS'>
        <   SiAmazoneks className="eks-icon" />
        <NivelExperienciaBackend nivel={2} prefix="backend-eks" />
        <span className="nivel-text-eks">Básico</span>
    </div>
    <div className="icon-with-nivel-fargate" title='Fargate'>
        <   SiAwsfargate className="fargate-icon" />
        <NivelExperienciaBackend nivel={2} prefix="backend-fargate" />
        <span className="nivel-text-fargate">Básico</span>
    </div>
    <div className="icon-with-nivel-vpc" title='VPC'>
        <   FaNetworkWired className="vpc-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-vpc" />
        <span className="nivel-text-vpc">Intermediário</span>
    </div>
    <div className="icon-with-nivel-sns" title='Amazon SNS'>
        <   SiAmazonsimpleemailservice className="sns-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-sns" />
        <span className="nivel-text-sns">Intermediário</span>
    </div>
    <div className="icon-with-nivel-route53" title='Route53'>
        <   SiAmazonroute53 className="route53-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-route53" />
        <span className="nivel-text-route53">Intermediário</span>
    </div>
    <div className="icon-with-nivel-redshift" title='Amazon Redshift'>
        <   SiAmazonredshift className="redshift-icon" />
        <NivelExperienciaBackend nivel={2} prefix="backend-redshift" />
        <span className="nivel-text-redshift">Básico</span>
    </div>
    <div className="icon-with-nivel-apigateway" title='API Gateway'>
        <   SiAmazonapigateway className="apigateway-icon" />
        <NivelExperienciaBackend nivel={2} prefix="backend-apigateway" />
        <span className="nivel-text-apigateway">Básico</span>
    </div>
    <div className="icon-with-nivel-cloudwatch" title='Cloud Watch'>
        <   SiAmazoncloudwatch className="cloudwatch-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-cloudwatch" />
        <span className="nivel-text-cloudwatch">Intermediário</span>
    </div>
    <div className="icon-with-nivel-iam" title='IAM'>
        <   SiAmazoniam className="iam-icon" />
        <NivelExperienciaBackend nivel={3} prefix="backend-iam" />
        <span className="nivel-text-iam">Intermediário</span>
    </div>
    </div>
  )
}

const OthersTools = () => {
  return (
    <div className='container-other-tools'>
      <h1>Other Tools</h1>
    <div className="icon-with-nivel-linux-" title='Linux'>
        < FaLinux className="linux-icon" />
        <NivelExperienciaBackend nivel={2} prefix="backend-linux" />
        <span className="nivel-text-linux">Básico</span>
    </div>
    <div className="icon-with-nivel-bash-" title='Shell'>
        < SiGnubash  className="bash-icon" />
        <NivelExperienciaBackend nivel={2} prefix="backend-bash" />
        <span className="nivel-text-bash">Básico</span>
    </div>
    <div className="icon-with-nivel-cassandra-" title='Apache Cassandra'>
        < SiApachecassandra className="cassandra-icon" />
        <NivelExperienciaBackend nivel={1} prefix="backend-cassandra" />
        <span className="nivel-text-cassandra">Introdutório</span>
    </div>
    <div className="icon-with-nivel-oracle-" title='Oracle19c'>
        < GrOracle className="oracle-icon" />
        <NivelExperienciaBackend nivel={2} prefix="backend-oracle" />
        <span className="nivel-text-oracle">Básico</span>
    </div>
    </div>
  );
};

