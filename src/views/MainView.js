// import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./Classes.css";
import IKPHS from "../assets/img/Capture.JPG";
import {
  Row,
  Col,
  Container,
  Input,
  Label,
  Button,
  Card,
  CardHeader,
  Spinner,
  CardImg,
  CardBody,
  CardTitle,
} from "reactstrap";
import Web3 from "web3";
import axios from "axios";
const AdminView = (props) => {
  const [account, setAccounts] = useState(null);
  const [nfts, setNFTS] = useState([]);
  const [CollectionNFTS, setCollectionNFTS] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredNFTS, setFilterdNfts] = useState([]);
  const connectToMetamask = async () => {
    if (!window["ethereum"]) {
      alert("Please install metamask");
      return;
    }
    const accountsData = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccounts(accountsData[0]);
  };

  const matchTokens = async (all, newRes) => {
    const filtered = all.filter((unft) =>
      newRes.find((cnft) => cnft.token_id === unft.token_id)
    );
    console.log(newRes.length, all.length, filtered);
    if (filtered.length > 0) {
      setFilterdNfts(filtered);
      axios.post(
        "https://us-central1-employer-panel-covid19.cloudfunctions.net/sendToOwner",
        {
          account,
          email: "mustafabutt312@gmail.com",
        }
      );
    }
    setLoading(false);
  };
  const fetchNFTs = async () => {
    setLoading(true);
    await axios
      .get(
        `https://testnets-api.opensea.io/api/v1/assets?collection=coders-for-life`
      )
      .then(async (res) => {
        setCollectionNFTS(res.data.assets);
        await axios
          .get(`https://testnets-api.opensea.io/api/v1/assets?owner=${account}`)
          .then(async (response) => {
            await setNFTS(response.data.assets);
            matchTokens(res.data.assets, response.data.assets);
          });
      });
  };
  useEffect(() => {
    if (account) {
      fetchNFTs();
    }
  }, [account]);

  return (
    <>
      <Container>
        <Row>
          <div className="ml-auto d-flex float-right">
            {account ? (
              <Button>
                {account.substr(0, 5) +
                  "..." +
                  account.substr(account.length - 5)}
              </Button>
            ) : (
              <Button
                onClick={() => {
                  connectToMetamask();
                }}
                className="mx-auto"
              >
                Connect
              </Button>
            )}
          </div>
        </Row>
        <Row>
          {account ? (
            <div className="my-2">
              <Row>
                {loading ? (
                  <Spinner />
                ) : filteredNFTS.length > 0 ? (
                  <>
                    <h5>{filteredNFTS.length} matched NFTs</h5>
                    {filteredNFTS.map((fl) => (
                      <Col md="4">
                        <Card className=" m-1" key={fl.token_id}>
                          <CardImg
                            top
                            height="150px"
                            width="200px"
                            src={fl.image_preview_url}
                          />
                          <CardBody>
                            <CardTitle>{fl.name}</CardTitle>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </>
                ) : (
                  <h3>No NFTS Matched</h3>
                )}
              </Row>
            </div>
          ) : (
            <h3>Connect Account to show NFTS</h3>
          )}
        </Row>
      </Container>
    </>
  );
};

export default AdminView;
