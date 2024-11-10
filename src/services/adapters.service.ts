import axios, { AxiosInstance } from "axios";
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { GeneralException } from "../execptions/GeneralException";




@Injectable()
export class AdaptersService {

    private readonly logger = new Logger(AdaptersService.name);
    private axios: AxiosInstance = axios;
    constructor(private readonly configService: ConfigService) {

    }

    getVallueXMLNode(xmlpath: string, xmlString: string, mappings: any): any {
        try {


            const DOMParser = require('@xmldom/xmldom').DOMParser;
            const xpath = require('xpath');
            const doc = new DOMParser().parseFromString(xmlString);
            const select = xpath.useNamespaces(mappings);

            const nodes = select(xmlpath, doc);
            if (nodes.length > 0) {
                const value = nodes[0].firstChild.nodeValue;
                return value;
            } else {
                return "";
            }
        }
        catch (error) {
            this.logger.error(error)

            throw new GeneralException('Internal server error');
        }

    }
}
